import ajax from './ajax'
import mock from './ajax mock'

export const reqBaseCategoryList = () => ajax(`/product/getBaseCategoryList`)
export const reqSearch = (parames) => ajax.post(`/list`,parames)

export const reqLogin = (mobile, password) => ajax.post(`/user/passport/login`, { mobile, password })

export const reqBanners=()=>mock.get('/banners')
export const reqFloors=()=>mock.get('/floors')