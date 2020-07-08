import request from '@/utils/request'
const BaseUrl = "/admin/product/fileUpload"


export default {
    uploadImg(blob) {
        return request({
            url: `${BaseUrl}`,
            method: 'POST',
            data: blob
        })
    }
}