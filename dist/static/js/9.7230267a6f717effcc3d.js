webpackJsonp([9,12],{303:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var n=i(341),l=a(n);t.exports=l.default},341:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var n=i(37),l=a(n),o=i(36),s=a(o),r=i(22);t.exports={name:"article-list",data:function(){return{article_list:[],listLoading:!1,image_host:r.gbs.image_host,batch_id:"",batch_flag:!0,paginations:{current_page:1,total:0,page_size:12,page_sizes:[3,9,12,24],layout:"total, sizes, prev, pager, next, jumper"},search_data:{title:""},dialog:{show:!1,url:"",article_info:{}},fields:{id:{info:{prop:"id",label:"文章ID",sortable:!0},filter:{},style:{width:"150",align:"center"}},created_at:{info:{prop:"created_at",label:"发布日期",sortable:!0},filter:{},style:{width:"260",align:"center"}},updated_at:{info:{prop:"created_at",label:"上次修改日期",sortable:!0},filter:{},style:{width:"260",align:"center"}},title:{info:{prop:"title",label:"文章标题",sortable:!1},filter:{},style:{width:"150",align:"left"}},content:{info:{prop:"content",label:"文章内容",sortable:!0},filter:{},style:{width:"150",align:"center"}}}}},methods:{onSelectionChange:function(t){if(t.length){this.batch_flag=!1;for(var e=[],i=0;i<t.length;i++)e.push(t[i].id);this.batch_id=e.join(",")}else this.batch_flag=!0,this.batch_id=""},onSearch:function(){var t=this,e=this.$route.query,i={},e=this.$route.query;for(var a in e)i[a]=e[a];var n={};for(var l in this.search_data)this.search_data[l]?n[l]=this.search_data[l]:i[l]&&delete i[l];this.getList({where:n,fn:function(){t.setPath((0,s.default)(i,n))}})},setPath:function(t,e){var i=this.$route.path,a=(0,s.default)({},this.$route.query);"object"===("undefined"==typeof t?"undefined":(0,l.default)(t))?a=t:a[t]=e,this.$router.push({path:i,query:a})},onChangeCurrentPage:function(t){var e=this;this.getList({page:t,fn:function(){e.setPath("page",t)}})},onChangePageSize:function(t){var e=this;this.getList({page_size:t,fn:function(){e.setPath("page_size",t)}})},onDeleteArticle:function(t,e,i){var a=this;if(t===!0)var n=this.batch_id;else var n=t.id;var l={httpResourceUrl:"/"+n,id:n};this.$$api_article_deleteArticle(l,function(l){t===!0?a.article_list=a.article_list.filter(function(t,e){return n.indexOf(t.id)===-1}):i.splice(e,1),a.getList()})},onEditArticle:function(t){t&&t.id?this.$router.push("/admin/article/edit?id="+t.id):this.$message({showClose:!0,message:"ID跑哪去了？",type:"error"})},onSelectArticle:function(t){this.dialog.show=!0,this.dialog.url=t.cover.url,this.dialog.article_info=t,console.log(t)},onCloseView:function(){},getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.page,a=e.page_size,n=e.where,l=e.fn;this.listLoading=!0;var o=this.$route.query;this.paginations.current_page=i||parseInt(o.page)||1,this.paginations.page_size=a||parseInt(o.page_size)||this.paginations.page_size;var r={page:this.paginations.current_page,limit:this.paginations.page_size};if(n)r=(0,s.default)(r,n||{});else for(var c in o)void 0!==this.search_data[c]&&(this.search_data[c]=o[c],r[c]=o[c]);this.$$api_article_selectArticle(r,function(e){t.article_list=e.list,t.paginations.total=Number(e.count),t.listLoading=!1,l&&l()})}},mounted:function(){this.getList({fn:function(){}})},$route:function(t,e){}}},468:function(t,e,i){e=t.exports=i(10)(),e.push([t.id,".demo-form-inline[data-v-033473f4]{display:inline-block;float:right}.btm-action[data-v-033473f4]{margin-top:20px;text-align:center}.actions-top[data-v-033473f4]{height:46px}.pagination[data-v-033473f4]{display:inline-block}","",{version:3,sources:["/./src/components/Modules/Admin/Article/List/List.vue"],names:[],mappings:"AACA,mCAAmC,qBAAqB,WAAW,CAClE,AACD,6BAA6B,gBAAgB,iBAAiB,CAC7D,AACD,8BAA8B,WAAW,CACxC,AACD,6BAA6B,oBAAoB,CAChD",file:"List.vue",sourcesContent:["\n.demo-form-inline[data-v-033473f4]{display:inline-block;float:right\n}\n.btm-action[data-v-033473f4]{margin-top:20px;text-align:center\n}\n.actions-top[data-v-033473f4]{height:46px\n}\n.pagination[data-v-033473f4]{display:inline-block\n}"],sourceRoot:"webpack://"}])},754:function(t,e,i){var a=i(468);"string"==typeof a&&(a=[[t.id,a,""]]);i(11)(a,{});a.locals&&(t.exports=a.locals)},796:function(t,e,i){i(754);var a=i(6)(i(303),i(808),"data-v-033473f4",null);t.exports=a.exports},808:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list"},[i("el-col",{staticClass:"actions-top",attrs:{span:24}},[i("el-button",{attrs:{type:"danger",icon:"delete",disabled:t.batch_flag},on:{click:function(e){t.onDeleteArticle(!0)}}},[t._v("删除选中\n        ")]),t._v(" "),i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.search_data}},[i("el-form-item",[i("el-input",{attrs:{placeholder:"标题"},model:{value:t.search_data.title,callback:function(e){t.search_data.title=e},expression:"search_data.title"}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:t.onSearch}},[t._v("查询")])],1)],1)],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{border:"",align:"center",data:t.article_list},on:{"selection-change":t.onSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),i("el-table-column",{attrs:{prop:t.fields.id.info.prop,label:t.fields.id.info.label,align:t.fields.id.style.align,sortable:t.fields.id.info.sortable,width:t.fields.id.style.width}}),t._v(" "),i("el-table-column",{attrs:{prop:t.fields.title.info.prop,label:t.fields.title.info.label,align:t.fields.title.style.align,sortable:t.fields.title.info.sortable}}),t._v(" "),i("el-table-column",{attrs:{prop:t.fields.created_at.info.prop,label:t.fields.created_at.info.label,align:t.fields.created_at.style.align,width:t.fields.created_at.style.width,sortable:t.fields.created_at.info.sortable}}),t._v(" "),i("el-table-column",{attrs:{prop:t.fields.updated_at.info.prop,label:t.fields.updated_at.info.label,align:t.fields.updated_at.style.align,width:t.fields.updated_at.style.width,sortable:t.fields.updated_at.info.sortable}}),t._v(" "),i("el-table-column",{attrs:{label:"操作",width:"160",context:t._self},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"info",icon:"view",size:"mini"},on:{click:function(i){t.onSelectArticle(e.row)}}}),t._v(" "),i("el-button",{attrs:{type:"info",icon:"edit",size:"mini"},on:{click:function(i){t.onEditArticle(e.row)}}}),t._v(" "),i("el-button",{attrs:{type:"danger",icon:"delete",size:"mini"},on:{click:function(i){t.onDeleteArticle(e.row,e.$index,t.article_list)}}})]}}])})],1),t._v(" "),i("el-col",{staticClass:"btm-action",attrs:{span:24}},[t.paginations.total>0?i("el-pagination",{staticClass:"pagination",attrs:{"page-sizes":t.paginations.page_sizes,"page-size":t.paginations.page_size,layout:t.paginations.layout,total:t.paginations.total,"current-page":t.paginations.current_page},on:{"current-change":t.onChangeCurrentPage,"size-change":t.onChangePageSize}}):t._e()],1),t._v(" "),i("el-dialog",{attrs:{size:"small",title:t.dialog.article_info.title},on:{close:t.onCloseView},model:{value:t.dialog.show,callback:function(e){t.dialog.show=e},expression:"dialog.show"}},[i("div",[i("img",{attrs:{src:t.image_host+"/"+t.dialog.url,width:"320"}})]),t._v(" "),i("div",{domProps:{innerHTML:t._s(t.dialog.article_info.content)}})])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=9.7230267a6f717effcc3d.js.map