<template>
	<view class="containter">
		<swiper class="banner-swiper" :indicator-dots="true" circular vertical :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="banner-item">
				<image :src="url" mode=""></image>
			</swiper-item>
			<swiper-item class="banner-item">
				<image :src="url" mode=""></image>
			</swiper-item>
			<swiper-item class="banner-item">
				<image :src="url" mode=""></image>
			</swiper-item>
			<swiper-item class="banner-item">
				<image :src="url" mode=""></image>
			</swiper-item>
		</swiper>

		<!-- 三图标 -->
		<view class="policyDescList">
			<view class="policy-item" v-for="(item,index) in homeData.policyDescList" :key="index">
				<image :src="item.icon" mode=""></image>
				<text>{{item.desc}}</text>
			</view>
		</view>

		<!-- 10图标 -->
		<view class="king-kong-list">
			<view class="king-kong-item" v-for="item in homeData.kingKongModule.kingKongList" :key="item.L1Id">
				<image :src="item.picUrl" mode=""></image>
				<text>{{item.text}}</text>
			</view>
		</view>
	<Categorys v-for="category in homeData.categoryModule" :category="category" :key="category.extra.resource.taskId"/>

	</view>
</template>

<script>
	import {
		mapState
	} from "vuex"
	import Categorys from "../categorys/categorys.vue"
	export default {
		name: "recommend",
		data() {
			return {
				url: "https://yanxuan.nosdn.127.net/7c4cae8935d22db54c6f2ac076e96953.jpg?type"
			}
		},
		components:{
			Categorys
		},
		mounted() {},
		
		methods: {

		},
		computed: {
			...mapState({
				homeData: state => state.home.homeData
			})
		}
	}
</script>

<style lang="less">
	.containter {
		.banner-swiper {
			height: 350upx;

			.banner-item {
				height: 100%;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.policyDescList {
			display: flex;
			width: 100%;
			height: 32upx;
			margin: 5upx 0;
			white-space: nowrap;
			justify-content: space-around;

			.policy-item {
				image {
					vertical-align: middle;
					width: 32upx;
					height: 32upx;
				}

				text {
					font-size: 24upx;
					line-height: 32upx;
				}
			}
		}

		.king-kong-list {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			margin-top: 20upx;
			.king-kong-item{
				display: flex;
				width: 20%;
				align-content: center;
				justify-content: center;
				flex-direction: column;
				align-items: center;
				text{
					font-size: 24upx;
				}
				image{
					width: 110upx;
					height: 110upx;
				}
			}
		}
	}
</style>
