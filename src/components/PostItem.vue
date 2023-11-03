<template>
  <div
    class="card"
  >
    <div class="card-name d-flex justify-content-center">
      {{ post.title }}
    </div>
    <div class="card-details">
      <p>Description</p>
      <div class="card-details-row author">
        <div class="card-description">
          {{ post.description }}
        </div>
      </div>
      <p>Text</p>
      <div class="card-details-row author">
        <div class="card-description">
          {{ post.text }}
        </div>
      </div>
      <p>Date</p>
      <div class="card-details-row author">
        <div class="card-description">
          {{ post.date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
  width: calc(33.33% - 52px);
  margin: 26px;
  padding: 17px;
  border-radius: 20px;
  background-color: #d9d9d9;
  box-shadow: 0 0 5px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  height: fit-content;
  overflow: hidden;
}
.card-image img {
  height: 100%;
  object-fit: contain;
}
.card-description {
  font-size: 1.2vw;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #000000;
  font-family: "Arsenal", sans-serif;
}
.card-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.card-details {
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.3vw;
  transition: transform 0.3s ease-out, height 0.3s ease-out;
}

.card-details-row {
  display: flex;
  align-items: center;
  margin-top: 5px;
}

.card-details-row.author {
  color: #222222;
  font-weight: 700;
}

.card-name {
  font-size: 1.3vw;
  color: #000000;
  font-weight: 700;
  font-family: "Arsenal", sans-serif;
}
</style>
