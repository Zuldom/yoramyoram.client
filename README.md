# GIF

메인페이지

<div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center">
  <img src="assets/main.gif" style="height:285px">
  <img src="assets/(m)main.gif" style="height:400px">
</div>

<br>

<br>

---

소개페이지

<div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center">
  <img src="assets/introduction.gif" style="height:285px">
  <img src="assets/(m)intro.gif" style="height:400px">
</div>

<br>

<br>

---

회원가입

<div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center">
  <img src="assets/signup.gif" style="height:285px">
  <img src="assets/(m)signup.gif" style="height:400px">
</div>

<br>

<br>

---

로그인페이지

<div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center">
  <img src="assets/login.gif" style="height:285px">
  <img src="assets/(m)login.gif" style="height:400px">
</div>

<br>

<br>

---

오프라인 지도([스마트서울맵 api](https://map.seoul.go.kr/smgis2/openApi)사용)

<div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center">
  <img src="assets/offline.gif" style="height:285px">
  <img src="assets/(m)offline.gif" style="height:400px">
</div>

<br>

<br>

---

상품목록

<div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center">
  <img src="assets/list.gif" style="height:285px">
  <img src="assets/(m)list.gif" style="height:400px">
</div>

<br>

<br>

상품검색

<div style="display:flex; justify-content:center;">
  <img src="assets/search.gif" style="height:400px">
</div>

<br>

<br>

---

상품 상세페이지

<div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center">
  <img src="assets/detail.gif" style="height:285px">
  <img src="assets/(m)detail.gif" style="height:400px">
</div>

<br>

<br>

---

찜목록

<div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center">
  <img src="assets/wishlist.gif" style="height:285px">
  <img src="assets/(m)wishlist.gif" style="height:400px">
</div>

<br>

<br>

---

장바구니

<div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center">
  <img src="assets/cart.gif" style="height:285px">
  <img src="assets/(m)cart.gif" style="height:400px">
</div>

<br>

<br>

---

상품등록

<div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center">
  <img src="assets/register.gif" style="height:285px">
  <img src="assets/(m)register.gif" style="height:400px">
</div>

<br>

<br>

## 🌱기술스택

![다운로드](https://user-images.githubusercontent.com/114714566/212859981-99d21754-286b-4e15-8fcf-0110058da6f5.png)

# ERD

<img width="1155" alt="스크린샷 2023-01-17 오후 6 23 46" src="https://user-images.githubusercontent.com/114714566/212860123-58963954-6467-4450-8e35-6ce55a9faf26.png">

<br><br>

# API DOCS

<img width="952" alt="스크린샷 2023-01-17 오후 6 31 37" src="https://user-images.githubusercontent.com/114714566/212861655-c96514a5-2105-4e05-8d9f-4c30296e7356.png">

<br><br>

# 서버 폴더구조

```
 ┣ 📂.vscode
 ┃ ┗ 📜settings.json
 ┣ 📂frontend
 ┃ ┗ 📜payment.html
 ┣ 📂src
 ┃ ┣ 📂apis
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📂interfaces
 ┃ ┃ ┃ ┃ ┗ 📜auth-service.interface.ts
 ┃ ┃ ┃ ┣ 📜auth.module.ts
 ┃ ┃ ┃ ┣ 📜auth.resolver.ts
 ┃ ┃ ┃ ┗ 📜auth.service.ts
 ┃ ┃ ┣ 📂comments
 ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┗ 📜create-comment.input.ts
 ┃ ┃ ┃ ┃ ┗ 📜update-comment.input.ts
 ┃ ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┃ ┗ 📜comment.entity.ts
 ┃ ┃ ┃ ┣ 📂interfaces
 ┃ ┃ ┃ ┃ ┗ 📜comments-service.interface.ts
 ┃ ┃ ┃ ┣ 📜comments.module.ts
 ┃ ┃ ┃ ┣ 📜comments.resolver.ts
 ┃ ┃ ┃ ┗ 📜comments.service.ts
 ┃ ┃ ┣ 📂iamport
 ┃ ┃ ┃ ┗ 📜iamport.service.ts
 ┃ ┃ ┣ 📂payment
 ┃ ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┃ ┗ 📜payment.entity.ts
 ┃ ┃ ┃ ┣ 📂interface
 ┃ ┃ ┃ ┃ ┗ 📜payment.interface.ts
 ┃ ┃ ┃ ┣ 📜payment.module.ts
 ┃ ┃ ┃ ┣ 📜payment.resolver.ts
 ┃ ┃ ┃ ┗ 📜payment.service.ts
 ┃ ┃ ┣ 📂phone
 ┃ ┃ ┃ ┣ 📜phone.module.ts
 ┃ ┃ ┃ ┣ 📜phone.resolver.ts
 ┃ ┃ ┃ ┗ 📜phone.service.ts
 ┃ ┃ ┣ 📂productDetailImages
 ┃ ┃ ┃ ┣ 📂interfaces
 ┃ ┃ ┃ ┃ ┗ 📜productsDetailImages-service.interface.ts
 ┃ ┃ ┃ ┣ 📜productsDetailImages.module.ts
 ┃ ┃ ┃ ┣ 📜productsDetailImages.resolver.ts
 ┃ ┃ ┃ ┗ 📜productsDetailImages.service.ts
 ┃ ┃ ┣ 📂productimages
 ┃ ┃ ┃ ┣ 📂interfaces
 ┃ ┃ ┃ ┃ ┗ 📜productsImages-service.interface.ts
 ┃ ┃ ┃ ┣ 📜productsImages.module.ts
 ┃ ┃ ┃ ┣ 📜productsImages.resolver.ts
 ┃ ┃ ┃ ┗ 📜productsImages.service.ts
 ┃ ┃ ┣ 📂products
 ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┗ 📜create-product.input.ts
 ┃ ┃ ┃ ┃ ┗ 📜update-product.input.ts
 ┃ ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┃ ┗ 📜product.entity.ts
 ┃ ┃ ┃ ┣ 📂interfaces
 ┃ ┃ ┃ ┃ ┗ 📜products-service.interface.ts
 ┃ ┃ ┃ ┣ 📜product.module.ts
 ┃ ┃ ┃ ┣ 📜product.resolver.ts
 ┃ ┃ ┃ ┗ 📜product.service.ts
 ┃ ┃ ┣ 📂productsCart
 ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┗ 📜createProductCart.input.ts
 ┃ ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┃ ┗ 📜productCart.entity.ts
 ┃ ┃ ┃ ┣ 📜productCart.module.ts
 ┃ ┃ ┃ ┣ 📜productCart.resolver.ts
 ┃ ┃ ┃ ┗ 📜productCart.service.ts
 ┃ ┃ ┣ 📂productsCatrgories
 ┃ ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┃ ┗ 📜productCategory.entity.ts
 ┃ ┃ ┃ ┣ 📂interface
 ┃ ┃ ┃ ┃ ┗ 📜products-categories-service.interface.ts
 ┃ ┃ ┃ ┣ 📜productsCategories.module.ts
 ┃ ┃ ┃ ┣ 📜productsCategories.resolver.ts
 ┃ ┃ ┃ ┗ 📜productsCategories.service.ts
 ┃ ┃ ┣ 📂productsWishlists
 ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┗ 📜create-productwishlist.input.ts
 ┃ ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┃ ┗ 📜productWishlist.entity.ts
 ┃ ┃ ┃ ┣ 📜productWishlist.module.ts
 ┃ ┃ ┃ ┣ 📜productWishlist.resolver.ts
 ┃ ┃ ┃ ┗ 📜productWishlist.service.ts
 ┃ ┃ ┣ 📂user
 ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┗ 📜create-user.input.ts
 ┃ ┃ ┃ ┃ ┗ 📜update-user.input.ts
 ┃ ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┃ ┗ 📜user.entity.ts
 ┃ ┃ ┃ ┣ 📂interfaces
 ┃ ┃ ┃ ┃ ┗ 📜users-service.interface.ts
 ┃ ┃ ┃ ┣ 📜user.module.ts
 ┃ ┃ ┃ ┣ 📜user.resolver.ts
 ┃ ┃ ┃ ┗ 📜user.service.ts
 ┃ ┣ 📂commons
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📜gql-auth.guard.ts
 ┃ ┃ ┃ ┣ 📜jwt-access.strategy.ts
 ┃ ┃ ┃ ┣ 📜jwt-admin.strategy.ts
 ┃ ┃ ┃ ┣ 📜jwt-refresh.strategy.ts
 ┃ ┃ ┣ 📂filter
 ┃ ┃ ┃ ┗ 📜http-exception.filter.ts
 ┃ ┃ ┣ 📂graphql
 ┃ ┃ ┃ ┗ 📜schema.gql
 ┃ ┃ ┗ 📂types
 ┃ ┃ ┃ ┗ 📜context.ts
 ┃ ┣ 📜app.controller.ts
 ┃ ┣ 📜app.module.ts
 ┃ ┗ 📜main.ts
 ┣ 📂test
 ┃ ┣ 📜app.e2e-spec.ts
 ┃ ┗ 📜jest-e2e.json
 ┣ 📜.dockerignore
 ┣ 📜.env.docker
 ┣ 📜.eslintrc.js
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜cloudbuild.yaml
 ┣ 📜docker-compose.prod.yaml
 ┣ 📜docker-compose.yaml
 ┣ 📜Dockerfile
 ┣ 📜Dockerfile.prod
 ┣ 📜gcp-file-storage.json
 ┣ 📜nest-cli.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜tsconfig.build.json
 ┣ 📜tsconfig.json
 ┗ 📜yarn.lock

```

<br><br>

# .env

```

# DB INFO on DOCKER
DATABASE_TYPE
DATABASE_HOST
DATABASE_PORT
DATABASE_USERNAME
DATABASE_PASSWORD
DATABASE_DATABASE

# TOKEN SECRET
JWT_ACCESS_SECRET
JWT_REFRESH_SECRET

IAMPORT_KEY
IAMPORT_SECRET


```

<!--  -->
