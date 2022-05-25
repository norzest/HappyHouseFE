<template>
  <div class="detail">
    <div class="exit"><button @click="aptList" class="back">〈</button></div>
    <div class="main">
      <div class="aptimg">
        <img src="@/assets/img/apt.jpg" alt="" />
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
      <div class="two">
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
      <div class="cover-bar"></div>
    </div>
    <div class="comment">
      <apt-detail-comment></apt-detail-comment>
    </div>
  </div>
</template>

<script>
import { deleteInterestedAptList, registInterestedAptList } from "@/api/apt.js";
import aptDetailItem from "@/components/map/item/aptDetailItem.vue";
import aptDetailComment from "@/components/map/item/aptDetailComment.vue";
import { mapState, mapActions } from "vuex";
const memberStore = "memberStore";
const aptStore = "aptStore";

export default {
  name: "aptDetail",
  components: {
    aptDetailItem,
    aptDetailComment,
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
    const params = {
      memberId: this.userInfo.id,
    };

    this.getFollowAptList(params);
    this.makeAptDetail();
    this.setImg();
  },
  watch: {
    apt() {
      this.makeAptDetail();
      this.setImg();
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
        aptCode: null,
      };
      this.detailApt(a);
    },
    makeAptDetail() {
      this.aptDetail = [];
      if (this.apt.apartmentName != null) {
        console.log(this.apt);
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
      for (let a of this.followapts) {
        if (a.aptCode == this.apt.aptCode) {
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
  background-color: white;
  margin: 15px 0 15px 15px;
  position: relative;
}

.two {
  width: 100%;
  height: 250px;
  overflow-y: scroll;
  padding-right: 3px;
}

.two::-webkit-scrollbar {
  width: 6px;
}
.two::-webkit-scrollbar,
.two::-webkit-scrollbar-thumb {
  overflow: visible;
  border-radius: 4px;
}
.two::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
}

.cover-bar {
  width: 6px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  -webkit-transition: all 0.5s;
  opacity: 1;
  background-color: white;
}

.money:hover .cover-bar {
  opacity: 0;
  -webkit-transition: all 0.5s;
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
