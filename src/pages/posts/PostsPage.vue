<template>
  <div class="cont m-auto">
    <div class="search-container">
      <div class="search-input">
        <input
          id="search"
          type="text"
          placeholder="Search"
        />
        <img src="../../assets/images/search.png" alt="" />
      </div>
    </div>
    <div class="mt-5 filters m-auto">
      <p>Filter</p>
      <div class="d-flex justify-content-center">
        <div class="form-group w-100 d-flex justify-content-between">
          <label for="">Date</label>
          <input
              type="date"
              class="form-control"
              id="date"
              v-model="filterDate"
              style="width: 70%"
              required
          />
        </div>
      </div>
    </div>
    <div class="mt-5 filters m-auto">
      <p>Search fields</p>
      <div class="d-flex justify-content-center">
        <div class="form-group w-100 d-flex justify-content-between">
          <div class="dropdown">
            <select
                class="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                style="font-size: 1.4vw"
                v-model="this.searchField"
            >
              <option style="background-color: white; color: black" value="title">
                Title
              </option>
              <option style="background-color: white; color: black" value="description">
                Description
              </option>
              <option style="background-color: white; color: black" value="text">
                Text
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button
          @click="makeSearchPosts"
          type="button"
          class="btn-create"
          style="margin-top: 20px"
      >
        Search
      </button>
    </div>
    <section class="section-grid">
      <h1 class="all-posts-title mt-5">All posts</h1>
      <hr class="wide-hr" />
      <PostList :posts="searchPosts" />
    </section>
    <div class="d-flex mb-5 justify-content-center flex-row">
      <div class="pagination-container">
        <ul class="pagination">
          <li @click="prevPage">
            <a
              :class="{
                'page-link': true,
                disabled: currentPaginationPage <= 1,
              }"
              href="#"
              >Previous</a
            >
          </li>
          <li
            class="page-item"
            v-for="pageNumber in paginationPageAmount"
            :key="pageNumber"
            :class="{ active: currentPaginationPage === pageNumber }"
            @click="changePaginationPage(pageNumber)"
          >
            <a class="page-link" href="#">{{ pageNumber }}</a>
          </li>
          <li @click="nextPage">
            <a
              :class="{
                'page-link': true,
                disabled: currentPaginationPage >= paginationPageAmount,
              }"
              href="#"
              >Next</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import { getPosts, searchPosts } from "@/api/posts";

export default {
  name: "PostPage",
  components: { PostList },
  data() {
    return {
      posts: [],
      sortedPosts: [],
      paginationLimit: 6,
      paginationPageAmount: 0,
      currentPaginationPage: 1,
      searchPosts: [],
      filterDate: null,
      searchField: "title"
    };
  },
  computed: {
    rows() {
      return this.posts.length;
    },
  },
  methods: {
    prevPage() {
      if (this.currentPaginationPage - 1 > 0) {
        this.currentPaginationPage = this.currentPaginationPage - 1;
        getPosts({
          limit: this.paginationLimit,
          page: this.currentPaginationPage,
        }).then((response) => {
          this.sortedPosts = response.data.posts.data;
        });
      }
    },
    nextPage() {
      if (this.currentPaginationPage + 1 <= this.paginationPageAmount) {
        this.currentPaginationPage = this.currentPaginationPage + 1;
        getPosts({
          limit: this.paginationLimit,
          page: this.currentPaginationPage,
        }).then((response) => {
          this.sortedPosts = response.data.posts.data;
        });
      }
    },
    changePaginationPage(newPageNumber) {
      getPosts({
        limit: this.paginationLimit,
        page: newPageNumber,
      }).then((response) => {
        this.sortedPosts = response.data.posts.data;
        this.currentPaginationPage = newPageNumber;
      });
    },
    makeSearchPosts() {
      const searchText = document.getElementById("search").value;
      if (searchText.length === 0) {
        return;
      }
      searchPosts({
        searchText: searchText,
        searchField: this.searchField,
        filters: this.filterDate === null ? null : {
          date: this.filterDate
        },
      }).then((response) => {
        this.searchPosts = response.data.posts;
      });
    },
  },
  beforeMount() {
    getPosts({
      limit: this.paginationLimit,
      page: this.currentPaginationPage,
    }).then((response) => {
      this.posts = response.data.posts.data;
      this.sortedPosts = response.data.posts.data;
      this.paginationPageAmount = response.data.posts.last_page;
    });
  },
};
</script>

<style scoped>
select {
  background-color: #bf9869;
  border: 1px solid #bf9869;
  color: white;
}
.cont {
  width: 90%;
  position: relative;
  padding-bottom: 40px;
  min-height: 100vh;
  top: 77px;
  margin-bottom: 40px;
  bottom: 100px;
  background-color: #ffffff;
}
.all-posts-title {
  color: white;
  position: relative;
  margin-bottom: 30px;
  text-align: center;
}
.wide-hr {
  width: 150px;
  height: 3px;
  background-color: #bf9869;
  border: none;
  margin: auto;
}

.search-container {
  margin-bottom: 80px;
  margin-left: 30px;
}

.search-input {
  display: flex;
  width: 100%;
  align-items: center;
  background-color: #bf9869;
  border-radius: 10px;
  padding: 10px;
}

.search-input input[type="text"] {
  flex: 1;
  padding: 0 10px;
  font-size: 1.4vw;
  border: none;
  color: white;
  background-color: transparent;
}

.search-input input[type="text"]::placeholder {
  color: white;
}

.search-results {
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
}

.search-results li {
  background-color: #fff;
  padding: 15px;
  color: black;
  font-size: 1.3vw;
  cursor: pointer;
}
.result-description {
  position: relative;
  left: 30px;
  width: 95%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.search-results li:hover {
  background-color: #bf9869;
}
.search-input img {
  margin-left: 10px;
}
.filters {
  width: 90%;
  margin-top: 30px;
  border: 3px solid #bf9869;
  padding: 40px 20px;
  border-radius: 30px;
}
.filter-item {
  margin-top: 40px;
}
.filters p {
  position: relative;
  color: white;
  margin-top: -63px;
  margin-left: 50px;
  font-size: 1.5vw;
  width: 13%;
  background-color: #222222;
}
.group-button button {
  background-color: #000000;
  color: white;
  font-size: 1.4vw;
  padding: 10px 10px;
  border: 1px solid black;
  width: 200px;
  border-radius: 20px;
}
h1 {
  font-family: "Alata", sans-serif;
}
</style>
