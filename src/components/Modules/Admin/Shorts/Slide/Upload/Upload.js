import {gbs} from 'config/settings.js';

module.exports = {
    name: 'upload',
    data() {
        return {
            url: gbs.host + '/slides',
            headers: {
                Authorization: this.$store.state.user.userinfo.token_type + ' ' + this.$store.state.user.userinfo.token
            },
            uploadData: {
                type: '1',
                sort: 99,
                to: ''
            },
            fileList2: [],
        }
    },
    methods: {
        handleRemove: function (file, fileList) {
            console.log(file, fileList);
        },
        handlePreview: function (file) {
            console.log(file);
        },
        handleSuccess: function (response, file, fileList) {
            if (response.status == 200) {
                this.uploadData.to = '';
                this.$message({
                    message: '上传成功！',
                    type: 'success'
                });
            } else {
                fileList.pop();
                this.$message({
                    message: '上传失败！',
                    type: 'warning'
                });
            }
        }
    },

    mounted() {

    },
    watch: {}
}