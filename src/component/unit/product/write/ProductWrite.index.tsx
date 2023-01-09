import * as S from "./ProductWrite.styles";
import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Modal, Select } from "antd";
import {
  CREATE_PRODUCT,
  UPLOAD_IMAGE,
  UPDATE_PRODUCT,
} from "../../../commons/hooks/mutation/useCreateProduct";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateProductArgs,
  IMutationUploadImageArgs,
} from "../../../../commons/types/generated/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./product-validation";
import { v4 as uuidv4 } from "uuid";
import Uploads01 from "../../../commons/uploads/01/Uploads01.index";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function ProductWrite(props: any) {
  // TAG //
  const [tagItem, setTagItem] = useState<string>("");
  const [tagList, setTagList] = useState<string[]>([]);
  const [tagItemTwo, setTagItemTwo] = useState<string>("");
  const [tagListTwo, setTagListTwo] = useState<string[]>([]);

  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length !== 0 && e.key === "Enter") {
      submitTagItem();
    }
  };
  const onKeyPressTwo = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length !== 0 && e.key === "Enter") {
      submitTagItemTwo();
    }
  };

  const submitTagItem = () => {
    let updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem("");
  };
  const submitTagItemTwo = () => {
    let updatedTagList = [...tagListTwo];
    updatedTagList.push(tagItemTwo);
    setTagListTwo(updatedTagList);
    setTagItemTwo("");
  };

  const deleteTagItem = (e: any) => {
    const deleteTagItem = e.currentTarget.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItem
    );
    setTagList(filteredTagList);
    // target객체 의 유형이 이고 TypeScript에서 허용되지 않는( 활성화된 EventTarget | null경우) nullable 유형의 속성에 액세스하려고 하기 때문에 발생합니다. 유형 가드를 통해서만 strictNullChecks유형을 좁혀서 이 오류를 수정할 수 있습니다
  };
  const deleteTagItemTwo = (e: any) => {
    const deleteTagItemTwo = e.currentTarget.parentElement.firstChild.innerText;
    const filteredTagList = tagListTwo.filter(
      (tagItemTwo) => tagItemTwo !== deleteTagItemTwo
    );
    setTagListTwo(filteredTagList);
  };

  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
      }
    });
  }, []);

  // TAG END //

  const router = useRouter();
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [uploadImage] = useMutation<
    Pick<IMutation, "uploadImage">,
    IMutationUploadImageArgs
  >(UPLOAD_IMAGE);

  const [createProduct] = useMutation<
    Pick<IMutation, "createProduct">,
    IMutationCreateProductArgs
  >(CREATE_PRODUCT);
  const { register, handleSubmit, setValue, trigger, getValues, formState } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const onChangeContents = (value: string) => {
    console.log(value);

    setValue("detailContent", value === "<p><br></p>" ? "" : value);
    void trigger("detailContent");
  };

  const onClickSubmit = async (data: any) => {
    const result = await Promise.all(
      files.map(async (el) =>
        el !== undefined
          ? await uploadImage({ variables: { images: data.images } })
          : undefined
      )
    );
    console.log(result);
    const resultUrls = result.map((el) =>
      el !== undefined ? el.data?.uploadImage : ""
    );
    console.log(resultUrls);
    console.log("??");
    console.log(data);
    setValue("productImages", resultUrls);

    try {
      const result = await createProduct({
        variables: {
          createProductInput: {
            name: data.name,
            price: data.price,
            description: data.description,
            etc1Name: data.etc1Name,
            etc1Value: String(tagList),
            etc2Name: data.etc1Name,
            etc2Value: String(tagListTwo),
            detailContent: data.detailContent,
            productImages: [...fileUrls],
            productCategoryId: data.productCategoryId,
          },
        },
      });
      console.log(result);
      Modal.success({ content: "상품이 등록되었습니다." });
      void router.push(`/products/${result.data?.createProduct.product_id}`);
    } catch (error) {
      Modal.error({ content: "상품등록에 실패했습니다." });
    }
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl[0];
    // console.log(newFileUrls);
    // console.log(newFileUrls[0]);
    setFileUrls(newFileUrls);
  };

  return (
    <div style={{ backgroundColor: "#fcfbfa" }}>
      <S.Wrapper>
        <S.Title>{props.isEdit ? "상품 수정" : "상품 등록"}</S.Title>
        <S.Form onSubmit={handleSubmit(onClickSubmit)}>
          <S.HalfWrapper>
            <S.HalfBox>
              <S.Label>상품명</S.Label>
              <S.Input
                type="text"
                placeholder="상품명을 입력하세요."
                {...register("name")}
              ></S.Input>
              <S.Error>{formState.errors.name?.message}</S.Error>
            </S.HalfBox>
            <S.HalfBox>
              <S.Label>가격</S.Label>
              <S.Input
                type="text"
                placeholder="가격을 입력하세요."
                {...register("price")}
              ></S.Input>
              <S.Error>{formState.errors.price?.message}</S.Error>
            </S.HalfBox>
          </S.HalfWrapper>
          <S.HalfWrapper>
            <S.SelectWrap>
              <S.Label>상품 카테고리</S.Label>
              <S.SelectBox {...register("productCategoryId")}>
                <option value="카테고리를 선택하세요." disabled selected>
                  카테고리를 선택하세요.
                </option>
                <option value="컬러">주방</option>
                <option value="생활">생활</option>
                <option value="욕실">욕실</option>
                <option value="여성용품">여성용품</option>
                <option value="반려동물">반려동물</option>
              </S.SelectBox>
            </S.SelectWrap>
            <S.OptionBox>
              <S.Label>상품 요약</S.Label>
              <S.Input
                type="text"
                placeholder="상품 요약을 입력하세요."
                {...register("description")}
              ></S.Input>
            </S.OptionBox>
          </S.HalfWrapper>
          <S.HalfWrapper>
            <S.SelectWrap>
              <S.Label>옵션명</S.Label>
              <S.SelectBox {...register("etc1Name")}>
                <option value="옵션을 선택하세요." disabled selected>
                  옵션을 선택하세요.
                </option>
                <option value="컬러">컬러</option>
                <option value="사이즈">사이즈</option>
              </S.SelectBox>
            </S.SelectWrap>
            <S.OptionBox>
              <S.Label>옵션값</S.Label>
              <S.WholeBox>
                <S.TagBox>
                  {tagList.map((tagItem, index) => {
                    return (
                      <S.TagItem key={index}>
                        <S.Text>{tagItem}</S.Text>
                        <S.Button onClick={deleteTagItem} type="button">
                          ✕
                        </S.Button>
                      </S.TagItem>
                    );
                  })}
                  <S.TagInput
                    type="text"
                    placeholder="옵션값을 입력하세요."
                    tabIndex={2}
                    onChange={(e) => setTagItem(e.currentTarget.value)}
                    value={tagItem}
                    onKeyPress={onKeyPress}
                  />
                </S.TagBox>
              </S.WholeBox>
            </S.OptionBox>
          </S.HalfWrapper>
          <S.HalfWrapper>
            <S.SelectWrap>
              <S.Label>옵션명</S.Label>

              <S.SelectBox {...register("etc2Name")}>
                <option value="옵션을 선택하세요." disabled selected>
                  옵션을 선택하세요.
                </option>
                <option value="컬러">컬러</option>
                <option value="사이즈">사이즈</option>
              </S.SelectBox>
            </S.SelectWrap>
            <S.OptionBox>
              <S.Label>옵션값</S.Label>
              <S.WholeBox>
                <S.TagBox>
                  {tagListTwo.map((tagItemTwo, index) => {
                    return (
                      <S.TagItem key={index}>
                        <S.Text>{tagItemTwo}</S.Text>
                        <S.Button onClick={deleteTagItemTwo} type="button">
                          ✕
                        </S.Button>
                      </S.TagItem>
                    );
                  })}
                  <S.TagInput
                    type="text"
                    placeholder="옵션값을 입력하세요."
                    tabIndex={2}
                    onChange={(e) => setTagItemTwo(e.currentTarget.value)}
                    value={tagItemTwo}
                    onKeyPress={onKeyPressTwo}
                  />
                </S.TagBox>
              </S.WholeBox>
            </S.OptionBox>
          </S.HalfWrapper>
          <S.InputWrapper>
            <S.Label>상품 정보</S.Label>
            <ReactQuill
              onChange={onChangeContents}
              style={{
                fontSize: "15px",
              }}
              className="quill"
            />
            <S.Error>{formState.errors.contents?.message}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>상품 사진</S.Label>
            <S.PhotoWrapper>
              {fileUrls.map((el, index) => (
                <S.PhotoBox>
                  <Uploads01
                    key={uuidv4()}
                    index={index}
                    fileUrl={el}
                    onChangeFileUrls={onChangeFileUrls}
                  />
                </S.PhotoBox>
              ))}
            </S.PhotoWrapper>
          </S.InputWrapper>
          <S.ButtonBox>
            <S.Cancel type="button">취소</S.Cancel>
            <S.Submit>등록</S.Submit>
          </S.ButtonBox>
        </S.Form>
      </S.Wrapper>
    </div>
  );
}
