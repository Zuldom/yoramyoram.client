import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useEffect } from "react";
import { PriceReg } from "../../../commons/library/util";
import {
  IMutation,
  IMutationDeleteProductCartArgs,
  IQuery,
  IQueryFetchProductCartArgs,
} from "../../../commons/types/generated/types";
import { DELETE_PRODUCT_CART } from "../../commons/hooks/mutation/useDeleteProductsCart";
import {
  FETCH_PRODUCTS_CART,
  FETCH_PRODUCTS_CART_COUNT,
  FETCH_PRODUCTS_CART_TOTAL_AMOUNT,
} from "../../commons/hooks/queries/useFetchProductCart";

import Pagination03 from "../../commons/pagination/03/Pagination03.container";

import * as S from "./Basket.styles";

export default function Basket() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchProductCart">,
    IQueryFetchProductCartArgs
  >(FETCH_PRODUCTS_CART, {
    variables: {
      page: 1,
    },
  });

  const [deleteProductCart] = useMutation<
    Pick<IMutation, "deleteProductCart">,
    IMutationDeleteProductCartArgs
  >(DELETE_PRODUCT_CART);

  const { data: dataProductsCartCount } = useQuery<
    Pick<IQuery, "fetchProductCartCount">
  >(FETCH_PRODUCTS_CART_COUNT);

  const { data: dataProductsCartTotalAmount } = useQuery<
    Pick<IQuery, "fetchProductCartTotalAmount">
  >(FETCH_PRODUCTS_CART_TOTAL_AMOUNT);
  console.log(dataProductsCartTotalAmount);

  const router = useRouter();

  const onClickMoveShopPage = () => {
    router.push("./products");
  };

  // const onClickMoveToDetail = (event: MouseEvent<HTMLTableRowElement>) => {
  //   void router.push(`/products/${event.currentTarget.id}`);

  // };
  const result = data?.fetchProductCart.map((el) => {
    return Number(el.quantity) * Number(el.product.price);
  });
  console.log(data?.fetchProductCart);
  const sum = result?.reduce((pv, av) => {
    return pv + av;
  }, 0);

  const onClickDeleteCart = (ev: MouseEvent<HTMLButtonElement>) => {
    deleteProductCart({
      variables: {
        productCartId: ev.currentTarget.id,
      },
      refetchQueries: [{ query: FETCH_PRODUCTS_CART }],
    });
  };

  return (
    <div style={{ backgroundColor: "#FCFBFA" }}>
      <S.Wrapper>
        <S.Title>Shopping Bag</S.Title>
        <S.FlexBoxWrap>
          <S.Left>
            <S.SubTitle>
              장바구니 상품 ({dataProductsCartCount?.fetchProductCartCount})
            </S.SubTitle>
            <S.Table>
              <colgroup>
                <col width="42%"></col>
                <col width="10%"></col>
                <col width="36%"></col>
                <col width="12%"></col>
              </colgroup>
              <S.Thead>
                <S.Tr>
                  <S.Th>상품정보</S.Th>
                  <S.Th>수량</S.Th>
                  <S.Th>가격</S.Th>
                  <S.Th>선택</S.Th>
                </S.Tr>
              </S.Thead>
              <S.Tbody>
                {data?.fetchProductCart?.map((el, idx) => (
                  <S.Tr id={el.id} key={idx}>
                    <S.PrdTd>
                      <S.ImgWrap>
                        <img
                          src={`https://storage.googleapis.com/${el.product.productImages[0]?.url}`}
                        />
                      </S.ImgWrap>
                      <S.PrdDetail>
                        <S.Name>{el.product.name}</S.Name>
                        <S.Option>
                          {el.product.etc1Name}:{el.etc1Value}
                        </S.Option>
                        <S.Option>
                          {el.product.etc2Name}:{el.etc2Value}
                        </S.Option>
                      </S.PrdDetail>
                    </S.PrdTd>
                    <S.Td>{el.quantity}</S.Td>
                    <S.Td>
                      {PriceReg(
                        String(Number(el.quantity) * Number(el.product.price))
                      )}
                      원
                    </S.Td>
                    <S.Td>
                      <S.Button id={el.id} onClick={onClickDeleteCart}>
                        삭제 ✕
                      </S.Button>
                    </S.Td>
                  </S.Tr>
                ))}
              </S.Tbody>
            </S.Table>

            {data?.fetchProductCart?.map((el, idx) => (
              <S.MobileList id={el.id} key={idx}>
                <S.PrdImg>
                  <img
                    src={`https://storage.googleapis.com/${el.product.productImages[0]?.url}`}
                  />
                </S.PrdImg>
                <S.PrdInfoWrap>
                  <S.PrdInfo>
                    <S.PrdName>{el.product.name}</S.PrdName>
                    <S.PrdOption>
                      {" "}
                      {el.product.etc1Name}:{el.etc1Value}
                    </S.PrdOption>
                    <S.PrdOption>
                      {el.product.etc2Name}:{el.etc2Value}
                    </S.PrdOption>
                    <S.Quantity>수량: {el.quantity}</S.Quantity>
                    <S.Price>
                      {" "}
                      {PriceReg(
                        String(Number(el.quantity) * Number(el.product.price))
                      )}{" "}
                      원
                    </S.Price>
                  </S.PrdInfo>
                  <S.Delete id={el.id} onClick={onClickDeleteCart}>
                    ✕
                  </S.Delete>
                </S.PrdInfoWrap>
              </S.MobileList>
            ))}

            <S.GoShop onClick={onClickMoveShopPage}>쇼핑 계속하기</S.GoShop>
          </S.Left>
          <S.Right>
            <S.RightTitle>주문금액</S.RightTitle>
            <S.PriceWrap>
              <S.PriceBox>
                <S.BoxTitle>총 결제 금액</S.BoxTitle>
                <S.SumPrice>
                  {PriceReg(
                    String(
                      dataProductsCartTotalAmount?.fetchProductCartTotalAmount
                    )
                  )}
                  <span>원</span>
                </S.SumPrice>
              </S.PriceBox>
              <S.PointBox>
                <S.PointTitle>적립예정 포인트</S.PointTitle>
                <S.Point>
                  {PriceReg(
                    String(
                      dataProductsCartTotalAmount?.fetchProductCartTotalAmount *
                        0.1
                    )
                  )}
                  p
                </S.Point>
              </S.PointBox>
            </S.PriceWrap>
            <S.PayButton>주문하기</S.PayButton>
            <S.MobileBtnWrap>
              <S.GoShopMob onClick={onClickMoveShopPage}>
                쇼핑 계속하기
              </S.GoShopMob>
              <S.PayButtonMob>주문하기</S.PayButtonMob>
            </S.MobileBtnWrap>
          </S.Right>
        </S.FlexBoxWrap>
        <Pagination03
          count={dataProductsCartCount?.fetchProductCartCount}
          refetch={refetch}
        />
      </S.Wrapper>
    </div>
  );
}
