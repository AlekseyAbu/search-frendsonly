<template>
  <div class="authors">
    <div class="about">
      <img class="img" :src="author.img"/>
      <div class="">
        <div class="name__block">
          <p class="name">{{author.name}}</p>
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.07996 0.884869C8.47902 0.419796 9.19871 0.419797 9.59778 0.884869L10.7438 2.22048C10.9512 2.46218 11.2613 2.59064 11.5789 2.56638L13.3337 2.43234C13.9447 2.38566 14.4536 2.89456 14.407 3.5056L14.2729 5.2604C14.2487 5.57795 14.3771 5.88808 14.6188 6.09547L15.9544 7.24152C16.4195 7.64058 16.4195 8.36027 15.9544 8.75934L14.6188 9.90538C14.3771 10.1128 14.2487 10.4229 14.2729 10.7405L14.407 12.4953C14.4536 13.1063 13.9447 13.6152 13.3337 13.5685L11.5789 13.4345C11.2613 13.4102 10.9512 13.5387 10.7438 13.7804L9.59778 15.116C9.19871 15.5811 8.47902 15.5811 8.07996 15.116L6.93391 13.7804C6.72652 13.5387 6.41639 13.4102 6.09884 13.4345L4.34404 13.5685C3.733 13.6152 3.2241 13.1063 3.27078 12.4953L3.40482 10.7405C3.42908 10.4229 3.30062 10.1128 3.05892 9.90538L1.72331 8.75934C1.25824 8.36027 1.25824 7.64058 1.72331 7.24152L3.05892 6.09547C3.30062 5.88808 3.42908 5.57795 3.40482 5.2604L3.27078 3.5056C3.2241 2.89456 3.733 2.38566 4.34404 2.43234L6.09884 2.56638C6.41639 2.59064 6.72652 2.46218 6.93391 2.22048L8.07996 0.884869Z" fill="#469BFC"/><g clip-path="url(#clip0)"><path d="M9.30128 10.8089C9.12354 11.0501 8.84675 11.1984 8.54749 11.2131C8.24822 11.228 7.95837 11.1074 7.75784 10.8847L5.96087 8.89053C5.67527 8.5738 5.70064 8.08555 6.01738 7.79995C6.33442 7.51436 6.82237 7.53988 7.10796 7.85677L8.37932 9.26773C8.39816 9.2887 8.4255 9.29994 8.4536 9.29857C8.48186 9.29721 8.50769 9.28308 8.52455 9.26059L11.1378 5.71632C11.3907 5.373 11.8741 5.29993 12.2175 5.55301C12.5607 5.8061 12.6336 6.28949 12.3805 6.63266L9.30128 10.8089Z" fill="white"/></g><defs><clipPath id="clip0"><rect width="6.76923" height="6.76923" fill="white" transform="translate(5.76172 4.92316)"/></clipPath></defs></svg>
        </div>
        <p class="nickname">{{author.nickname}}</p>
      </div>
    </div>
    <button class="button">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.64999 5.00031L9.74362 1.90668C10.0854 1.56487 10.0854 1.0107 9.74362 0.669421L9.3312 0.257001C8.98928 -0.0849194 8.43511 -0.0849194 8.09383 0.257001L5.00031 3.35052L1.90668 0.25636C1.56487 -0.0854535 1.0107 -0.0854535 0.669421 0.25636L0.25636 0.66878C-0.0854535 1.0107 -0.0854535 1.56487 0.25636 1.90615L3.35052 5.00031L0.257001 8.09383C-0.0849194 8.43575 -0.0849194 8.98992 0.257001 9.3312L0.669421 9.74362C1.01124 10.0854 1.5654 10.0854 1.90668 9.74362L5.00031 6.64999L8.09383 9.74362C8.43575 10.0854 8.98992 10.0854 9.3312 9.74362L9.74362 9.3312C10.0854 8.98928 10.0854 8.43511 9.74362 8.09383L6.64999 5.00031Z" fill="#E9E9E9"/></svg>
    </button>
  </div>
</template>

<script>
export default {
    props: ["author"]
}
</script>

<style scoped>
.authors {
  width: calc(100% - 23 * 2px);
  padding: 0 0 13px;
  margin: 0 0 13px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
.name__block {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.name {
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #292941;
  margin: 0 5px 4px 0;
}
.nickname {
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #8a8ca9;
  margin: 0;
}
.about {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.button {
  border: none;
  background: #fff;
}
</style>