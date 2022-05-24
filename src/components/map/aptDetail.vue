<template>
  <div class="detail">
    <div class="exit"><button @click="aptList" class="back">〈</button></div>
    <div class="main">
      <div class="aptimg">
        <img src="../../assets/img/apt.jpg" alt="" />
      </div>
      <div class="info">
        <div>
          <div class="title">{{ apt.apartmentName }}</div>
          <div class="juso">{{ apt.juso }}</div>
        </div>
        <div class="interested">
          <img
            v-show="isFollow"
            src="@/assets/img/star_yes.png"
            alt=""
            @click="setInterestedLoc('d')"
          />
          <img
            v-show="!isFollow"
            src="@/assets/img/star_no.png"
            alt=""
            @click="setInterestedLoc('r')"
          />
        </div>
      </div>
    </div>
    <div class="money">
      <div>
        <table>
          <colgroup>
            <col style="width: 35%" />
            <col style="width: 30%" />
            <col style="width: 30%" />
            <col style="width: 10%" />
          </colgroup>
          <thead>
            <tr>
              <th>거래년도</th>
              <th>가격</th>
              <th>면적<small>(㎡)</small></th>
              <th>층</th>
            </tr>
          </thead>
          <tbody>
            <apt-detail-item
              v-for="(detail, index) in aptDetail"
              :key="index"
              v-bind="detail"
            ></apt-detail-item>
          </tbody>
        </table>
      </div>
    </div>
    <div class="comment">
      <div class="inputbox">
        <textarea name="comment" id="comment" cols="30" rows="4"></textarea>
        <button>작성</button>
      </div>
      <div class="commentlist">
        <div class="commentitem">
          <div class="userid">
            <span>asdf****</span>
            <span class="date">22.05.24.</span>
          </div>
          <div class="commenttext">테스트 댓글</div>
        </div>
        <div class="commentitem">
          <div class="userid">
            <span>asdf****</span>
            <span class="date">22.05.24.</span>
          </div>
          <div class="commenttext">테스트 댓글</div>
        </div>
        <div class="commentitem">
          <div class="userid">
            <span>asdf****</span>
            <span class="date">22.05.24.</span>
          </div>
          <div class="commenttext">테스트 댓글</div>
        </div>
        <div class="commentitem">
          <div class="userid">
            <span>asdf****</span>
            <span class="date">22.05.24.</span>
          </div>
          <div class="commenttext">테스트 댓글</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { deleteInterestedAptList, registInterestedAptList } from "@/api/apt.js";
import aptDetailItem from "@/components/map/item/aptDetailItem.vue";
import { mapState, mapActions } from "vuex";
const memberStore = "memberStore";
const aptStore = "aptStore";

export default {
  name: "aptDetail",
  components: {
    aptDetailItem,
  },
  data() {
    return {
      aptDetail: [],
      isFollow: false,
    };
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
    ...mapState(aptStore, ["apt", "apts", "followapts"]),
  },
  created() {
    this.setImg();
  },
  watch: {
    apt() {
      this.makeAptDetail();
    },
    followapts() {
      this.setImg();
    },
  },
  methods: {
    ...mapActions(aptStore, ["detailApt", "getFollowAptList"]),
    aptList() {
      const a = {
        apartmentName: null,
        juso: null,
      };
      this.detailApt(a);
    },
    makeAptDetail() {
      this.aptDetail = [];
      if (this.apt.apartmentName != null) {
        for (let item of this.apts) {
          if (item.aptName == this.apt.apartmentName) {
            this.aptDetail.push(item);
          }
        }
      }
    },
    setInterestedLoc(type) {
      var params = {
        aptCode: this.apt.aptCode,
        memberId: this.userInfo.id,
      };
      if (type == "d") {
        deleteInterestedAptList(
          params,
          () => {
            this.getFollowAptList(params);
          },
          (error) => {
            console.log(error);
          },
        );
        this.isFollow = false;
      } else if (type == "r") {
        registInterestedAptList(
          params,
          () => {
            this.getFollowAptList(params);
          },
          (error) => {
            console.log(error);
          },
        );
        this.isFollow = true;
      }
    },
    setImg() {
      for (let apt of this.followapts) {
        if (apt.aptCode == this.apt.aptCode) {
          this.isFollow = true;
          break;
        } else {
          this.isFollow = false;
        }
      }
    },
  },
};
</script>

<style scoped>
.comment {
  width: 100%;
  padding-top: 20px;
}
.userid {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  font-size: 14px;
}
.commenttext {
  margin: 10px 0;
}
.date {
  color: gray;
}
.comment .inputbox {
  display: flex;
  justify-content: center;
  align-items: center;
}

.commentitem {
  margin: 10px;
  padding: 10px;
}

.inputbox button {
  height: 67px;
  margin-left: 10px;
  background-color: #996a54;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 0 14px;
  cursor: pointer;
}
/* ----------------------- */

.exit {
  padding-bottom: 5px;
}
.back {
  background-color: transparent;
  border: none;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
}
.detail {
  padding: 10px;
}
.main {
  display: flex;
  flex-direction: column;
}
.aptimg {
  margin: 10px auto;
}
.main img {
  width: 280px;
}
.info {
  display: flex;
  margin: 10px;
  justify-content: space-between;
}
.title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
}
.juso {
  color: gray;
  padding-left: 10px;
  margin-bottom: 10px;
}
.interested img {
  width: 25px;
  height: 25px;
}
.money {
  height: 200px;
  overflow: hidden;
  margin: 15px 10px;
  position: relative;
}
.money:hover {
  overflow: auto;
}
.money::-webkit-scrollbar {
  width: 12px;
}

.money::-webkit-scrollbar-thumb {
  background-color: #e1e1e1;
  border-radius: 12px;
  background-clip: padding-box;
  border: 3px solid transparent;
}

.money::-webkit-scrollbar-track {
  border-radius: 12px;
}
.money table {
  width: 100%;
  text-align: center;
}
.money table thead {
  background-color: #d5d2cc;
}
.money th {
  padding: 10px;
  font-size: 14px;
}
</style>
