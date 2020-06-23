<template>
  <div>
      <!-- Page Header -->
    <header class="masthead" style="background-image: url('img/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>Заметки</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
      <!-- Main Content -->
    <main>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-preview">
              <a href="post.html">
                <h2 class="post-title">
                  Man must explore, and this is exploration at its greatest
                </h2>
                <h3 class="post-subtitle">
                  Problems look mighty small from 150 miles up
                </h3>
              </a>
              <p class="post-meta">Posted by
                <a href="#">Start Bootstrap</a>
                on September 24, 2019</p>
            </div>
            <hr>

            <!-- Pager -->
            <div class="clearfix">
              <button class="btn btn-primary" @click="createNotice()">Create notice</button>
              <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
            </div>
          </div>
        </div>
      </div>
      <hr>
    </main>
  </div>
</template>

<script>
    import * as noticeService from '../services/notice_service';
    export default {
      name: 'notice',
      data() {
        return {
          noticeData: {

          }
        }
      },
      methods: {
        createNotice: async function() {
            let formData = new FormData();
            formData.append('title', 'test title');
            formData.append('body', 'test body');

            try{
                const response = await noticeService.createNotice(formData);
            } catch(error) {
                console.log(error);
                // switch(error.response.status) {
                //     case 422:
                //         this.errors = error.response.data.errors;
                //         break;
                //     default:
                //         this.flashMessage.error({
                //             message: 'Some error occurred. Please try again!',
                //             time: 3000
                //         });
                //         break;
                // }
            }
        },
      }, 
    }
</script>
