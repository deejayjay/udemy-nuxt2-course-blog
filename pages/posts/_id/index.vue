<template>
  <div class="container">
    <section class="single-post-page">
      <article class="post">
        <div class="post-heading">
          <h2 class="title">Post Title</h2>
          <div class="post-details">
            <p class="post-updated">Last updated on XXX</p>
            <p class="post-author">Written by AUTHOR</p>
          </div>
        </div>
        <p class="post-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
          blanditiis veritatis dolorem itaque similique voluptate fugit tempora
          voluptatum rerum corporis pariatur maiores doloribus, aut laborum
          ratione quisquam cumque veniam ea. Praesentium molestias maxime
          repellendus rem dicta fugit est atque optio debitis nihil nemo,
          veritatis vero molestiae ipsa ex minus recusandae officiis ea!
          Repellat earum numquam quasi vel dignissimos magnam nisi. Ratione et
          sed cumque illo accusantium earum, itaque aliquam corrupti, beatae
          necessitatibus quam voluptate perspiciatis nesciunt nemo quaerat nisi
          nostrum officiis sapiente doloremque ut harum rem. At iure ducimus
          saepe.
        </p>
      </article>
      <aside class="post-feedback">
        <h3 class="feedback-title">Feedback</h3>
        <p class="feedback-content">
          Let me know what you think about the post. Send an email to
          <a href="mailto:feedback@myawesomedomain.com">
            feedback@myawesomedomain.com </a
          >.
        </p>
      </aside>
    </section>
  </div>
</template>

<style scoped>
.single-post-page {
  background: #ededed;
  padding: 1.5rem;
  border-radius: 0.5rem;
  max-width: 1280px;
  margin: 2rem auto 0;
}

.post-heading {
  display: flex;
  border-bottom: 2px solid #708090;
  padding-bottom: 0.5rem;
  align-items: flex-end;
  justify-content: space-between;
}

.title {
  font-size: 2rem;
  font-weight: 500;
  color: rgb(233, 19, 137);
}

.post-details {
  font-style: italic;
  font-size: 0.875rem;
  color: #676767;
}

.post-content {
  margin-top: 1rem;
}

.post-feedback {
  margin-top: 1rem;
}

.feedback-title {
  border-bottom: 1px solid #708090;
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(233, 19, 137);
}

.feedback-content {
  font-size: 0.875rem;
}
</style>