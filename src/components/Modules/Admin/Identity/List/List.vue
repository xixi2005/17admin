<template>
    <div class="list">
        <el-col :span="24" class='actions-top'>
            <el-button type='danger' icon='delete'
                       :disabled='batch_flag'
                       @click='deleteSlide(true)'>删除选中
            </el-button>
        </el-col>
        <el-table border style="width: 100%" align='center'
                  :data="slide_list"
                  v-loading.body="listLoading"
                  @selection-change='onSelectionChange'>

            <el-table-column
                    prop="id"
                    label="id"
                    align="center"
                    width="55">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    align="center"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="type"
                    label="认证类型"
                    align="center"
                    width="120"
                    :filters="[{text:'个人认证',value:1},{text:'企业认证',value:2}]"
                    :filter-method="filterType">
                <template scope="scope">
                    {{scope.row.type == 1 ? '个人认证' : '企业认证'}}
                </template>
            </el-table-column>
            <el-table-column
                    prop="id_card"
                    label="身份证号"
                    align="center"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="company"
                    label="公司"
                    align="center">
            </el-table-column>
            <el-table-column
                    prop="position"
                    label="职位"
                    align="center">
            </el-table-column>
            <el-table-column
                    prop="picture"
                    label="查看图片"
                    align="center"
                    width="100">
                <template scope="scope">
                    <el-button @click="showPicture(scope.row.picture)" type="text"
                               size="small">
                        <img :src="image_host +'/'+ scope.row.picture+'?imageView2/1/w/45/h/45/q/75|imageslim'">
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column
                    prop="stateText"
                    label="认证状态"
                    align="center"
                    width="150"
                    :filters="statusfulters"
                    :filter-method="filterStatus">
            </el-table-column>
            <el-table-column
                    label="操作"
                    :width="260"
                    :context="_self">
                <template scope='scope'>
                    <el-button
                            type="info"
                            icon='view'
                            size="mini"
                            @click='showPicture(scope.row.picture)'></el-button>
                    <el-button
                            type="info"
                            icon='edit'
                            size="mini"
                            @click='checkDialog(scope)'></el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-col :span="24" class="toolbar">
            <el-pagination
                    layout="prev, pager, next"
                    @current-change="handleCurrentChange"
                    :page-size="limit"
                    :total="slide_count"
                    style="float:right;">
            </el-pagination>
        </el-col>
        <!-- 图片弹出框 -->
        <el-dialog title="图片" v-model="dialogPictures">
            <img :src="picture" width="100%">
        </el-dialog>
        <!-- 编辑排序框 -->
        <el-dialog title="编辑" v-model="dialogEdit" size="tiny">
            <el-form :model="form">
                <el-radio-group v-model="radio">
                    <el-radio :label="0">已经提交审核</el-radio>
                    <el-radio :label="1">审核中</el-radio>
                    <el-radio :label="2">审核不通过</el-radio>
                    <el-radio :label="3">审核通过</el-radio>
                    <el-radio :label="4">认证被撤销</el-radio>
                </el-radio-group>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogEdit = false">取 消</el-button>
                <el-button type="primary" @click="edit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
	import ListJs from './List.js';
	module.exports = ListJs;
</script>
<style scoped lang='less'>
    .demo-form-inline {
        display: inline-block;
        float: right;
    }

    .btm-action {
        margin-top: 20px;
        text-align: center;
    }

    .actions-top {
        height: 46px;
    }

    .pagination {
        display: inline-block;
    }
</style>
