<template>
	<view class="content">
		<view class="header">
			<image src="../../static/images/logo.png" mode=""></image>
			<view class="search">
				<text class="iconfont icon-sousuo"></text>
				<input type="text" placeholder-class="searchPlaceHolder" placeholder="搜索商品" />
			</view>
			<button>XXX</button>
		</view>
		<scroll-view class="scroll-nav" enable-flex scroll-x="true" v-if="homeData.kingKongModule">
			<view :class="{'scroll-item':true, 'active':activeItemId===-1}" @click="handleNavClick(-1)">推荐</view>
			<view :class="{'scroll-item':true, 'active':activeItemId===index}" v-for="(item,index) in homeData.kingKongModule.kingKongList"
			 :key="item.L1Id" @click="handleNavClick(index)">{{item.text}}</view>
		</scroll-view>

		<!-- 内容区域 -->
		<scroll-view scroll-y="true" class="recommendScroll">
			<!-- 推荐 -->
			<Recommend v-if="activeItemId===-1"/>
			<CateList v-else :navIndex="activeItemId"/>
		</scroll-view>
	</view>
</template>

<script>
	import Recommend from "../../components/recommend/index.vue"
	import CateList from "../../components/cateList/cateList.vue"
	import {
		mapActions,
		mapState
	} from "vuex"
	export default {
		data() {
			return {
				obj: {},
				activeItemId: 0
			}
		},
		components: {
			Recommend,
			CateList
		},
		methods: {
			handleNavClick(id) {
				this.activeItemId = id
			}
		},
		computed: {
			...mapState({
				homeData: state => state.home.homeData
			})
		},
		mounted() {
			// console.log(this.$store.s);
			this.$store.dispatch("GETHOMEDATA")
			console.log(this.$store.state);
			// let result = await this.$request("/getIndexData")
			// this.obj = result
		}
	}
</script>
<style lang="less">
	.content {
		width: 100%;

		.header {
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 100%;
			height: 62upx;
			margin-top: 20upx;
			padding: 0 10upx;

			image {
				width: 128upx;
				height: 40upx;
				margin: 0 20upx;
			}

			.search {
				display: flex;
				height: 60upx;
				line-height: 60upx;
				background-color: #eaeaea;
				border-radius: 10upx;
				padding: 0 0 0 20upx;
				box-sizing: border-box;

				input {
					height: 100%;
					width: 332upx;
					min-height: 1.4rem;
					font-size: 24upx;
					box-sizing: border-box;
					padding-left: 20upx;

					.searchPlaceHolder {
						text-align: center;
						font-size: 24upx;
						text-indent: -60upx;
					}
				}
			}

			button {
				width: 144upx;
				font-size: 24upx;
				height: 60upx;
				color: #ED4C67;
			}
		}

		.scroll-nav {
			white-space: nowrap;

			.scroll-item {
				// width: 140upx;
				padding: 0 30upx;
				height: 80upx;
				text-align: center;
				line-height: 80upx;
				display: inline-block;
				font-size: 28upx;

				&.active {
					margin: 0 10upx;
					border-bottom: 1upx solid #ED4C67;
				}
			}
		}

		.recommendScroll {
			height: calc(100vh - 160upx);
		}
	}
</style>
