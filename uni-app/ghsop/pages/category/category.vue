<template>
	<view class="containter">
		<view class="header">
			<view class="search">
				搜索商品
			</view>
		</view>
		<view class="content">
			<view class="left-nav">
				<scroll-view class="scoll-view" scroll-y="true">
					<view 
					v-for="item in categoryList" 
					:class="{'category-item':true, 'active':activeCategoryId===item.id}" 
					@click="changActivecaterogyId(item.id)"
					:key="item.id">{{item.name}}</view>
				</scroll-view>
			</view>
			<scroll-view class="right-content" scroll-y="true">
				<image :src="activeCategory.imgUrl" mode=""></image>
				<view class="subCateList">
					<view class="subcate-item" v-for="item in activeCategory.subCateList" :key="item.id">
						<image :src="item.wapBannerUrl" mode=""></image>
						<text>{{item.name}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categoryList: [],
				activeCategoryId: null,
			};
		},
		mounted() {
			this.$request("/getcatelist").then(v => {
				this.categoryList = v.data;
				this.activeCategoryId = v.data[0].id;
			})
		},
		computed: {
			activeCategory() {
				return this.categoryList.find(item => item.id === this.activeCategoryId)
			}
		},
		methods:{
			changActivecaterogyId(id){
				this.activeCategoryId = id
			},
			toDetail(good){
				wx.navigateTo({
					url:"/pages/detail/detail?good="+JSON.stringify(good)
				})
			}
		}
	}
</script>

<style lang="less">
	.containter {
		width: 100%;
		height: 100%;

		.header {
			width: 100%;
			padding: 10upx 0;

			.search {
				width: 80%;
				margin: 0 auto;
				background-color: #eee;
				text-align: center;
				line-height: 60upx;
				border-radius: 10upx;
				font-size: 24upx;
				color: #999;
			}
		}

		.content {
			height: calc(100vh - 80upx);
			display: flex;
			border-top: 1upx solid #eee;
			box-sizing: border-box;
			width: 100vw;
			.left-nav {
				box-sizing: border-box;
				height: 100%;
				border: 1upx solid #eee;
				width: 20%;

				.scoll-view {
					height: 100%;
					font-size: 30upx;

					.category-item {
						text-align: center;
						line-height: 80upx;
						position: relative;

						&.active::before {
							content: "";
							height: 50upx;
							position: absolute;
							top: 15upx;
							left: 6upx;
							border-right: 3upx solid red;
						}
					}
				}
			}

			.right-content {
				height: 100%;
				width: 80%;
				image{
					display: block;
					width: 520rpx;
					height: 190rpx;
					margin: 20rpx auto;
				}
				.subCateList{
					width: 100%;
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					.subcate-item{
						width: 33.33%;
						display: flex;
						flex-direction: column;
						text-align: center;
						image{
							width: 160upx;
							height: 144upx;
							display: block;
							margin: 0 auto;
						}
						text{
							font-size: 26upx;
						}
					}
				}
			}
		}
	}
</style>
