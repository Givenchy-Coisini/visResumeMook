import ResumeType, { ResumeTemplate } from '@common/types/resume';

export interface RModel {
  namespace: string;
  openSeamlessImmutable: boolean;
  state: RStore;
}

export interface RStore {
  userResume: ResumeType;
  resumeTemplateList: ResumeTemplate[];
  selectResumeTemplateName: string;
  selectResumeTemplateIndex: number;
}

const resumeModel: RModel = {
  namespace: 'resumeModel',
  openSeamlessImmutable: true,
  state: {
    userResume: {
      baseInfo: {
        username: '彭道宽',
        area: '海南·海口',
        school: '湖南瞎说大学',
        major: '软件工程',
        degree: '本科',
        hometown: '汉族',
      },
      contactInfo: {
        phone: '176****2612',
        email: '1063137960@qq.com',
        github: 'https://github.com/PDKSophia',
        juejin: 'https://juejin.cn/user/1838039171075352',
      },
      seekWorkInfo: {
        job: '前端工程师',
        city: ['广州', '成都', '海口'],
      },
      hobby: '篮球、爬山、健身、吉他、街舞',
      skill: [
        '熟悉 Vue.js，了解数据双向绑定原理、阅读过 NextTick 源码',
        '熟悉 React，了解并使用 Hooks 特性，阅读过 redux 源码，开发 rc-redux-model 中间件',
        '阅读过 Antd 部分优秀组件源码，并参考借鉴，开发组内 UI 组件库',
        '了解 Vscode，开发组内项目辅助工具 vscode-beehive-extension 插件',
        '了解 Webpack 编译原理，了解 babel 转码原理，编写过 babel 插件',
        '了解 Electron，了解 Node.js 以及 Gievaluationt 团队协作开发工具',
        '了解设计模式，对于特定场景，能采用合适的设计模式进行解决',
        '了解 MYSQL，了解数据库优化常用方法',
        '了解基于微信公众号应用开发，采用 Taro 开发微信小程序，具备良好的网络基础知识',
      ],
      evaluation: [
        '投身开源，rc-redux-model 库作者，SugarTurboS Club 开源组织负责人',
        '掘金 lv3 博主，掘金文章 10w+ 阅读量，github blog 300+ star',
        '具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境。',
        '具有代码洁癖，前后端分离，自我学习能力强，对新技术具有钻研精神',
      ],
      schoolExperience: [
        {
          beginTime: 1504195200000,
          endTime: 1535731200000,
          post: '文艺部会长',
          department: '校团委学生会',
          content: [
            '计划、组织、协调各年级学生组织的文艺和文化娱乐活动',
            '承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目',
          ],
        },
      ],
      workExperience: [
        {
          beginTime: 1504195200000,
          endTime: 1559318400000,
          post: '前端工程师',
          department: '湖南科技大学网络中心',
          content: [
            '担任TickNet工作室前端工程师，与湖南科技大学网络中心合作，围绕微信企业号开发或主导多个应用',
            '任职期间基于微信企业号开发校内闲余市场，采用Vue.js主导开发，并于湖南厚德科技有限公司合作，主导开发该公司官网及后台管理',
          ],
        },
        {
          beginTime: 1527782400000,
          endTime: 1553011200000,
          post: '前端工程师',
          department: '成都良师益友科技有限公司',
          content: [
            '担任百词斩旗下闲蛋英语组前端实习生，任职期间负责线上的老系统进行日常维护和修复',
            '配合leader，使用React+Taro参与新项目小程序的页面开发，同时使用 React+ AntDesign 对项目后台管理进行版本迭代',
          ],
        },
      ],
      projectExperience: [
        {
          beginTime: 1596211200000,
          endTime: 1601395200000,
          projectName: 'rc-redux-model 中间件',
          post: '前端工程师',
          content: [
            '阅读 redux 源码，阅读 redux-thunk 源码，参考 dva.js 数据设计',
            '内部实现 thunk，所有的 dispatch action 都是异步 action，内部实现异步 action 机制',
          ],
        },
        {
          beginTime: 1614528000000,
          endTime: 1627747200000,
          projectName: 'visResumeMook 可视化简历平台',
          post: '前端工程师',
          content: [
            'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版',
            '通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档',
            '通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版',
          ],
        },
      ],
    },
    resumeTemplateList: [],
    selectResumeTemplateName: '测试模版',
    selectResumeTemplateIndex: 0,
  },
};

export default resumeModel;