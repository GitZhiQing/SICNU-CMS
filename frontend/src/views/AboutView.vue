<template>
  <div class="about-banner">
    <h1 class="about-banner-title">立足四川、服务西南、面向全国、胸怀世界</h1>
    <video class="about-banner-video" preload="auto" loop playsinline autoplay src="@/assets/videos/sicnu-banner.mp4"
           tabindex="-1"></video>
  </div>


  <section class="about-news">
    <h1 class="about-section-title"> 川师 · 新闻 </h1>
    <div class="about-section-container">
      <div class="about-news-hot-cards">
        <div class="about-lists-title">
          <h2>热点新闻</h2>
          <a href="#">更多</a>
        </div>
        <a href="#" class="about-news-link-card">
          <img src="@/assets/about-images/news/news1.jpg" alt="news1">
          <p class="news-desc">我校接受教育部本科教育教学审核评估专家组入校考察</p>
        </a>
        <a href="#" class="about-news-link-card">
          <img src="@/assets/about-images/news/news2.jpg" alt="news1">
          <p class="news-desc">青春正当时 立志以报国——学校举行2024年五四表彰大会</p>
        </a>
        <a href="#" class="about-news-link-card">
          <img src="@/assets/about-images/news/news3.jpg" alt="news1">
          <p class="news-desc">我校本科教育教学审核评估专家线上评估启动</p>
        </a>
        <a href="#" class="about-news-link-card">
          <img src="@/assets/about-images/news/news4.jpg" alt="news1">
          <p class="news-desc">学校召开第六届工会会员代表、教职工代表大会第四次会议</p>
        </a>
      </div>

      <div class="about-news-releases">
        <div class="about-lists-title">
          <h2>校园新闻</h2>
          <a href="#">更多</a>
        </div>
        <ul class="lists">
          <li>
            <a class="news-releases-list" href="#">
              我校2023年自然指数排名位列全省省属高校第一
              <span class="news-link-time">05-14</span>
            </a>
          </li>
          <li>
            <a class="news-releases-list" href="#">
              我校环境/生态学新晋ESI全球排名前1%学科
              <span class="news-link-time">05-14</span>
            </a>
          </li>
          <li>
            <a class="news-releases-list" href="#">
              澳大利亚麦考瑞大学商学院来校访问
              <span class="news-link-time">05-21</span>
            </a>
          </li>
          <li>
            <a class="news-releases-list" href="#">
              学校举行“探索基础教育改革路径 引领区域教师教育发展”主题交流会
              <span class="news-link-time">05-20</span>
            </a>
          </li>
          <li>
            <a class="news-releases-list" href="#">
              学校召开定点帮扶普格县工作对接会
              <span class="news-link-time">05-20</span>
            </a>
          </li>
          <li>
            <a class="news-releases-list" href="#">
              “深入贯彻落实总书记5·17重要讲话精神 推动四川哲学社会科学实践创新”座谈会在...
              <span class="news-link-time">05-20</span>
            </a>
          </li>
          <li>
            <a class="news-releases-list" href="#">
              电影《平教之路》在我校放映
              <span class="news-link-time">05-19</span>
            </a>
          </li>
          <li>
            <a class="news-releases-list" href="#">
              四川省“校园欺凌综合治理”专题研讨会举行
              <span class="news-link-time">05-19</span>
            </a>
          </li>
          <li>
            <a class="news-releases-list" href="#">
              学校第六届校史解说风采大赛决赛圆满落幕
              <span class="news-link-time">05-19</span>
            </a>
          </li>
          <li>
            <a class="news-releases-list" href="#">
              四川省“校园欺凌综合治理”专题研讨会举行
              <span class="news-link-time">05-19</span>
            </a>
          </li>
          <li>
            <a class="news-releases-list" href="#">
              《三苏学刊》创刊获批
              <span class="news-link-time">05-15</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="topic">
    <!-- 轮播 -->
    <h1 class="section-title-topic"> 川师 · 专题 </h1>
    <div id="demo" class="carousel slide" data-bs-ride="carousel">

      <!-- Indicators/dots -->
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
      </div>

      <!-- The slideshow/carousel -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/about-images/swapper/swa-1.jpg" alt="Shanghai" class="d-block" style="width:100%">
        </div>
        <div class="carousel-item">
          <img src="@/assets/about-images/swapper/swa-2.jpg" alt="Beijing" class="d-block" style="width:100%">

        </div>
        <div class="carousel-item">
          <img src="@/assets/about-images/swapper/swa-3.jpg" alt="Wuhan" class="d-block" style="width:100%">
        </div>
      </div>

      <!-- Left and right controls/icons -->
      <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </section>

  <section class="about-notice">
    <!-- 分为两栏的通知公告和学术讲座，都是链接列表组成的 -->
    <!-- 学术讲座 -->
    <!-- 通知公告 -->
    <div class="about-section-container">
      <div class="lecture-lists">
        <div class="about-lecture-lists-title">
          <h2>学术讲座</h2>
          <a href="#">更多</a>
        </div>
        <ul class="lists">
          <li class="lecture-list"><a>数学科学学院学术讲座：Interactions between real-enriched categories and real-valued
            topological spaces<span class="lecture-time">05-22</span></a></li>
          <li class="lecture-list"><a>数学科学学院学术讲座：Nonconvex Robust High-Order Tensor Completion Using
            Randomized
            Low-Rank Approximation<span class="lecture-time">05-22</span></a></li>
          <li class="lecture-list"><a>数学科学学院学术讲座：A construction of upper power domains over dcpos<span
              class="lecture-time">05-22</span></a></li>
          <li class="lecture-list"><a>数学科学学院学术讲座：广义连续偏序集的拓扑表示<span
              class="lecture-time">05-22</span></a></li>
          <li class="lecture-list"><a>地理与资源科学学院学术讲座：高三地理复习的道法术器<span
              class="lecture-time">05-22</span></a>
          </li>
        </ul>
      </div>

      <div class="notice-lists">
        <div class="about-notice-lists-title">
          <h2>通知公告</h2>
          <a href="#">更多</a>
        </div>
        <ul class="lists">
          <li class="notice-list"><a>四川师范大学校医院2024年5月人事代理招聘工作人员公告<span
              class="notice-time">05-22</span></a>
          </li>
          <li class="notice-list"><a>四川师范大学拟调入人员公示（202403号）<span class="notice-time">05-21</span></a></li>
          <li class="notice-list"><a>关于举行四川师范大学校园安全知识竞赛暨四川省第三届大学生国家安全知识和技能展示活动校内选拔赛的通知<span
              class="notice-time">05-21</span></a></li>
          <li class="notice-list"><a>四川师范大学2024年公开选调工作人员公告<span class="notice-time">05-21</span></a>
          </li>
          <li class="notice-list"><a>关于征集四川师范大学校史档案的通知<span class="notice-time">05-17</span></a></li>
        </ul>
      </div>
    </div>
  </section>
  <section class="block-logo">
    <h1 class="about-section-title" style="text-align: left; padding-left: 1.5rem;"> 川师 · 媒体 </h1>
    <div class="medias">
      <a class="media" href="#">
        <h3><i class="fa fa-weibo"></i> 四川师范大学官方微博</h3>
        <p class="info">
          四川师范大学官方微博是你熟悉川师一点一滴的快捷小帮手，关注我们，与我们互动，看到更多彩的川师！
        </p>
      </a>

      <a class="media" href="#">
        <h3><i class="fa fa-weixin"></i> 四川师范大学官方微信</h3>
        <p class="info">
          四川师范大学官方微信是你在师大学习生活的小助手，点击右上角关注，获取最新校园资讯！
        </p>
      </a>

      <a class="media" href="#">
        <h3>易班</h3>
        <p class="info">
          易班是提供教育教学、生活服务、文化娱乐的综合性互动社区。网站融合了论坛、社交、博客、微博等主流的Web2.0应用，加入了为在校师生定制的教育信息化一站式服务功能，并支持WEB、手机客户端等多种访问形式。易班在高校中设立了学生工作站，开展了丰富多彩的校园文化活动，已经成为全国教育系统的知名文化品牌。
        </p>
      </a>
    </div>
  </section>

  <!--回到顶部按钮-->
  <a href="#" id="back-to-top" title="Back to top">
    <i class="fa fa-chevron-up">Top</i>
  </a>

  <footer>
    <div class="footer-info">
      <img src="@/assets/about-images/block-logo.png" alt="block-logo" id="block-logo">
      <p>© All Right Reserved . 四川师范大学 版权所有 (四川师范大学 web 开发期中作业)</p>
      <p>蜀ICP备05026983号-1 |
        <img src="@/assets/about-images/beian-icon.png" alt="beian-icon">
        川公网安备 51010402000410号
        <img src="@/assets/about-images/shiyedanwei.png" alt="shiyedanwei">
      </p>
    </div>
    <div class="footer-about">
      <p>狮子山校区：成都市锦江区静安路5号 (邮编: 610066)</p>
      <p>成龙校区：成都市龙泉驿区成龙大道二段1819号 (邮编: 610101)</p>
      <p>遂宁校区：遂宁市船山区科教园区科创西路88号 (邮编: 629000)</p>
      <ul class="footer-links">
        <li class="footer-link"><a href="#">邮件系统&nbsp;|&nbsp;</a></li>
        <li class="footer-link"><a href="#">党务校务信箱&nbsp;|&nbsp;</a></li>
        <li class="footer-link"><a href="#">四川省高校网络理政平台</a></li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
}

a {
  text-decoration: none;
  color: #276e51;
}

a:hover {
  text-decoration: underline;
  color: #d1ad69;
}

header {
  width: auto;
  background-color: #276e51;
}

#about-header-l-logo {
  width: 20rem;
  margin: 1rem;
  display: inline-block;
}

.about-header-content {
  right: 0;
  padding: 1rem;
  margin-top: 4rem;
  position: absolute;
  display: inline-block;
}

.about-header-search-area {
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #3d7d63;
}

.search-input {
  border: none;
  color: #f7f7f7;
  background-color: #3d7d63;
}

.search-input::placeholder {
  color: #f7f7f7;
}

.search-input:focus {
  outline: none;
}

#about-search-icon {
  color: #f7f7f7;
  padding: 0.2rem;
  background-color: #3d7d63;
}

.about-header-link-list {
  display: inline-block;
  margin-right: 1rem;
}

.header-link {
  margin-right: 0.6rem;
  color: #f7f7f7;
}

.header-link:hover {
  text-decoration: underline;
}

nav {
  background-color: #2e8661;
  padding: 0.3rem;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.about-nav-lists {
  list-style: none;
  display: flex;
  justify-content: center;
}

.about-nav-list {
  margin: 0 1.5rem;
  text-align: center;
}

.nav-link {
  color: #f7f7f7;
  font-weight: 600;
  text-align: center;
}

.sub-about-nav-list {
  width: 8rem;
  display: none;
  position: absolute;
  background-color: #2e8661cc;
  padding: 0.5rem;
  border-radius: 0.2rem;
  list-style: none;
  margin-left: -2.5rem;
  z-index: 3;
  text-align: center;
}

.about-nav-list:hover .sub-about-nav-list {
  display: block;
}

.sub-about-nav-list .sub-nav-link {
  color: #f7f7f7;
  display: block;
  padding: 0.2rem;
}

.about-banner {
  position: relative;
  height: 60vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-banner .about-banner-video {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  min-height: 50rem;
  z-index: 1;
}

.about-banner-title {
  position: relative;
  font-style: italic;
  font-family: '方正姚体', serif;
  font-size: 4vw;
  color: #f7f7f7;
  text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.5);
  padding: 0.6rem;
  z-index: 2;
}

@media screen and (min-width: 768px) {
  .about-section-container {
    flex-direction: row;
  }

  .about-news-hot-cards,
  .about-news-releases-lists {
    width: 45%;
    margin: 0 2.5%;
  }

  .about-news-link-card {
    width: 48%;
  }
}

@media screen and (max-width: 768px) {
  #about-header-l-logo {
    width: 30vw;
  }

  .about-header-content {
    margin: 0;
    right: 0;
  }

  .about-header-search-area {
    margin: 0.2rem 0;
    padding: 0.3rem;
    border-radius: 0.5rem;
    display: block;
  }

  #about-search-icon {
    padding: 0.1rem;
  }

  .about-header-link-list {
    margin: 0;
    position: absolute;
    right: 0.3rem;
  }

  .about-nav-list {
    margin: 0 0.5rem;
  }

  .about-banner {
    height: 30vh;
  }
}

.about-news,
.about-notice {
  margin-top: 3rem;
  padding: 0 1.5rem;
}


.about-section-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #276e51;
}

.about-section-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
}

.about-news-hot-cards,
.about-news-releases,
.about-lists-title,
.about-lecture-lists-title,
.about-notice-lists-title {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
}

.about-news-link-card {
  width: 100%;
  margin-bottom: 1rem;
}

.about-news-link-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.news-desc,
.news-releases-list,
.lecture-list,
.notice-list {
  font-size: 16px;
  margin-top: 10px;
  height: 1.2rem;
}

.news-link-time,
.lecture-time,
.notice-time {
  color: #6c757d;
  float: right;
  margin-left: 3rem;
  z-index: 1;
}

.about-lists-title,
.about-lecture-lists-title,
.about-notice-lists-title {
  border-bottom: 2px solid #276e51;
  padding-bottom: 10px;
}

.about-lists-title h2,
.about-lecture-lists-title h2,
.about-notice-lists-title h2 {
  font-size: 20px;
  font-weight: bold;
}

.lists {
  padding: 1rem;
  margin-bottom: 20px;
  list-style: none;
}

.lists li {
  margin-left: -1rem;
  margin-right: -1rem;
  margin-bottom: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.lists li::before {
  content: "> ";
  color: #276e51;
  margin-right: 10px;
}

@media screen and (min-width: 768px) {
  .about-section-container {
    flex-direction: row;
  }

  .about-news-hot-cards,
  .about-news-releases,
  .notice-lists,
  .lecture-lists {
    width: 45%;
    margin: 0 2.5%;
  }

  .about-news-link-card {
    width: 48%;
  }
}

.section-title-topic {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #276e51;
  padding: 0 1.5rem;
}

.block-logo {
  text-align: center;
  margin: 2rem 0;
}

.block-logo img {
  width: 20rem;
}

.medias {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.media {
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 1rem;
  width: calc(33% - 2rem);
  text-align: left;
}

.media h3 {
  font-size: 1.2rem;
  color: #276e51;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
}

.media .info {
  font-size: 1rem;
  color: #666;
}

@media screen and (max-width: 768px) {
  .media {
    width: calc(100% - 2rem);
  }
}

footer {
  background-color: #276e51;
  color: #f7f7f7;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 3rem;
}

.footer-info,
.footer-about {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.footer-info {
  width: 65%;
  text-align: center;

}

.footer-about {
  width: 30%;
  text-align: left;
}

.footer-about p {
  margin: 0.5rem 0;
}

.footer-info img {
  width: 1rem;
  margin: 0 0.2rem;
  vertical-align: middle;
}

#block-logo {
  width: 10rem;
  margin: 1rem auto;
}

.footer-links {
  list-style: none;
  padding: 0;
  display: flex;
}

.footer-link {
  margin-top: 0.5rem;
}

.footer-link a {
  margin-right: 0.5rem;
  color: #f7f7f7;
  white-space: nowrap;
}

.footer-link a:hover {
  text-decoration: none;
  color: #d1ad69;
}

@media (max-width: 768px) {
  footer {
    flex-direction: column;
    text-align: center;
  }

  .footer-info,
  .footer-about {
    width: 100%;
    margin: 1rem;
    text-align: center;
  }

  .footer-links {
    flex-direction: column;
  }
}

#back-to-top {
  width: 3rem;
  padding: 1rem;
  background-color: #2e8661;
  color: #f7f7f7;
  border-radius: 1rem;
  margin: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
}

#back-to-top:hover {
  background-color: #276e51;
  text-decoration: none;
}
</style>
