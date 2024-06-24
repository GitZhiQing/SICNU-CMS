<script setup>
function confirmDeleteArticle() {
  return confirm('确定删除文章？');
}

// 确定编辑文章
function confirmEditArticle() {
  return confirm('确定编辑文章？');
}
</script>

<template>
  <section class="admin-container">
    <div class="admin-articles-edit">
      <h1>文章管理</h1>
      <ul class="article-list">
        <li class="article-item">
          <div class="article-header">
            <h3 class="article-title">Web | 网站部署入门</h3>
            <div class="article-actions">
              <form action="admin_articles_edit.php" method="post" style="display: inline;">
                <input type="hidden" name="id" value="9">
                <input type="submit" name="delete" value="删除" onclick="return confirmDeleteArticle()">
              </form>
              <a href="index.php?action=post&target=articles&id=9"
                 onclick="return confirmEditArticle()">编辑</a>
            </div>
          </div>
          <p>
            PHP 网站的部署相对简单，因此本文以 PHP 网站部署为例，其他语言存在一些不同。
            由于 PHP 在过去相当长一段时间里的广泛流行，其本身设计又具有较多安全问题，我们以后的 Web 安全学习会较多涉 </p>
          <small class="article-meta">
            <span class="article-ctime">创建：2024-06-02 10:03:57</span>
            <span class="article-utime">更新：2024-06-02 10:03:57</span>
            <span class="article-author">作者：1</span>
          </small>
        </li>
        <li class="article-item">
          <div class="article-header">
            <h3 class="article-title">安全领域特殊名词解释</h3>
            <div class="article-actions">
              <form action="admin_articles_edit.php" method="post" style="display: inline;">
                <input type="hidden" name="id" value="8">
                <input type="submit" name="delete" value="删除" onclick="return confirmDeleteArticle()">
              </form>
              <a href="index.php?action=post&target=articles&id=8"
                 onclick="return confirmEditArticle()">编辑</a>
            </div>
          </div>
          <p>
            CTF
            CTF（Capture The Flag）中文一般译作夺旗赛，在网络安全领域中指的是网络安全技术人员之间进行技术竞技的一种比赛形式。CTF
            起源于 1996 年 DEFCON 全球黑客大会，以 </p>
          <small class="article-meta">
            <span class="article-ctime">创建：2024-06-02 09:51:55</span>
            <span class="article-utime">更新：2024-06-02 09:51:55</span>
            <span class="article-author">作者：1</span>
          </small>
        </li>
        <li class="article-item">
          <div class="article-header">
            <h3 class="article-title">Misc_Introduction for NewCTFER</h3>
            <div class="article-actions">
              <form action="admin_articles_edit.php" method="post" style="display: inline;">
                <input type="hidden" name="id" value="7">
                <input type="submit" name="delete" value="删除" onclick="return confirmDeleteArticle()">
              </form>
              <a href="index.php?action=post&target=articles&id=7"
                 onclick="return confirmEditArticle()">编辑</a>
            </div>
          </div>
          <p>
            前言
            MISC，意思就是杂项，杂是他的一大特点，很多人的固有印象是这个方向全是工具，其实不然，MISC是一个很讲究原理的方向，如果你抛弃原理，全拿工具一把梭，那么你肯定在MISC的世界是走不远的。
            为 </p>
          <small class="article-meta">
            <span class="article-ctime">创建：2024-06-02 09:50:31</span>
            <span class="article-utime">更新：2024-06-02 09:50:31</span>
            <span class="article-author">作者：1</span>
          </small>
        </li>
        <li class="article-item">
          <div class="article-header">
            <h3 class="article-title">AWD | AWD比赛指导手册</h3>
            <div class="article-actions">
              <form action="admin_articles_edit.php" method="post" style="display: inline;">
                <input type="hidden" name="id" value="6">
                <input type="submit" name="delete" value="删除" onclick="return confirmDeleteArticle()">
              </form>
              <a href="index.php?action=post&target=articles&id=6"
                 onclick="return confirmEditArticle()">编辑</a>
            </div>
          </div>
          <p>
            手册版本号：V1.2.2-2023/10/21

            这是一本能让你从零开始学习AWD并深入AWD的手册，我也会根据经验和需求逐步完善相关内容。如果你要参加AWD相关比赛，相信本项目能给你带来帮助~

            如 </p>
          <small class="article-meta">
            <span class="article-ctime">创建：2024-06-02 09:48:23</span>
            <span class="article-utime">更新：2024-06-02 09:48:23</span>
            <span class="article-author">作者：1</span>
          </small>
        </li>
        <li class="article-item">
          <div class="article-header">
            <h3 class="article-title">AWD | AWD 入门 Part2 实操</h3>
            <div class="article-actions">
              <form action="admin_articles_edit.php" method="post" style="display: inline;">
                <input type="hidden" name="id" value="4">
                <input type="submit" name="delete" value="删除" onclick="return confirmDeleteArticle()">
              </form>
              <a href="index.php?action=post&target=articles&id=4"
                 onclick="return confirmEditArticle()">编辑</a>
            </div>
          </div>
          <p>
            文中涉及的操作仅仅是一场 AWD 所需要最基本的操作（LNMP/LAMP 环境的简单操作），想要达到能够正常参加一场线下 AWD
            比赛的水平，需要掌握更多的技能和花活。
            遇见任何有疑惑的地方，记得查资 </p>
          <small class="article-meta">
            <span class="article-ctime">创建：2024-06-02 09:46:30</span>
            <span class="article-utime">更新：2024-06-02 09:46:30</span>
            <span class="article-author">作者：1</span>
          </small>
        </li>
        <li class="article-item">
          <div class="article-header">
            <h3 class="article-title">AWD | AWD 入门 Part1 基础</h3>
            <div class="article-actions">
              <form action="admin_articles_edit.php" method="post" style="display: inline;">
                <input type="hidden" name="id" value="3">
                <input type="submit" name="delete" value="删除" onclick="return confirmDeleteArticle()">
              </form>
              <a href="index.php?action=post&target=articles&id=3"
                 onclick="return confirmEditArticle()">编辑</a>
            </div>
          </div>
          <p>
            在学习 AWD 之前，你需要了解并学习 SSH，SFTP，Linux，计算机网络，Python
            等基础知识（其实都是计科基本功）。什么都不会？莫得问题，都是工具，多多使用、练习、思考、总结 就会了。
          </p>
          <small class="article-meta">
            <span class="article-ctime">创建：2024-06-02 09:46:00</span>
            <span class="article-utime">更新：2024-06-02 09:46:00</span>
            <span class="article-author">作者：1</span>
          </small>
        </li>
        <li class="article-item">
          <div class="article-header">
            <h3 class="article-title">提问的智慧</h3>
            <div class="article-actions">
              <form action="admin_articles_edit.php" method="post" style="display: inline;">
                <input type="hidden" name="id" value="2">
                <input type="submit" name="delete" value="删除" onclick="return confirmDeleteArticle()">
              </form>
              <a href="index.php?action=post&target=articles&id=2"
                 onclick="return confirmEditArticle()">编辑</a>
            </div>
          </div>
          <p>
            在黑客的世界里，你所提技术问题的解答的好坏, 很大程度上取决于你提问的方式与此问题的难度。本指南将教你如何正确地提问以获得你满意的答案。

            现在开源（Open Source）软件已经相当盛行，您通常可 </p>
          <small class="article-meta">
            <span class="article-ctime">创建：2024-06-02 09:44:14</span>
            <span class="article-utime">更新：2024-06-02 09:44:14</span>
            <span class="article-author">作者：1</span>
          </small>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>

</style>