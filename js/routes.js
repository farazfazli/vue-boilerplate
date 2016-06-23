var navigation = Vue.partial('navigation',
    `<style>
            .navbar-toggle .icon-bar {
               background-color: #347AB7 !important;
            }
            </style>
            <nav nav-pills role="navigation">
            <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" v-link="{ path: '/' }">Name Here</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="collapse">
                <ul class="nav navbar-nav">
               <li><a v-link="{ path: '/about' }">About</a></li>
               <li><a v-link="{ path: '/books' }">Books</a></li>
               <li><a v-link="{ path: '/blogs' }">Blogs</a></li>
               <li><a v-link="{ path: '/events' }">Events</a></li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>`);

var notFound = Vue.extend({
    // You can also use path to a component - path : '/path/to/component.html'
    template: '<h1>Page Not Found</h1>'
})

var sliderComponent = Vue.extend({
    template: `<header id="myCarousel" class="carousel slide">
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>

        <div class="carousel-inner">
            <div class="item active">
                <div class="fill" style="background-image:url('https://placeholdit.imgix.net/~text?txtsize=28&bg=0099ff&txtclr=ffffff&txt=Slide&w=1000&h=1000&fm=png');"></div>
                <div class="carousel-caption">
                    <h2>Slide 1</h2>
                </div>
            </div>
            <div class="item">
                <div class="fill" style="background-image:url('https://placeholdit.imgix.net/~text?txtsize=28&bg=0099ff&txtclr=ffffff&txt=Slide&w=1000&h=1000&fm=png');"></div>
                <div class="carousel-caption">
                    <h2>Slide 2</h2>
                </div>
            </div>
            <div class="item">
                <div class="fill" style="background-image:url('https://placeholdit.imgix.net/~text?txtsize=28&bg=0099ff&txtclr=ffffff&txt=Slide&w=1000&h=1000&fm=png');"></div>
                <div class="carousel-caption">
                    <h2>Slide 3</h2>
                </div>
            </div>
            <div class="item">
                <div class="fill" style="background-image:url('https://placeholdit.imgix.net/~text?txtsize=28&bg=0099ff&txtclr=ffffff&txt=Slide&w=1000&h=1000&fm=png');"></div>
                <div class="carousel-caption">
                    <h2>Slide 4</h2>
                </div>
            </div>
        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="icon-prev"></span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="icon-next"></span>
        </a>

    </header>`
})

var aboutComponent = Vue.extend({
    template: `<div class="container">
            <div class="jumbotron">
            <h1>About</h1>
            <hr>
            <p>About page text</p>
            </div>
            </div>`
})

var booksComponent = Vue.extend({
    template: `<div class="container">
            <div class="jumbotron">
            <h1>Books</h1>
            <hr>
            <p>Books page text</p>
            </div>
            </div>`
})

var blogsComponent = Vue.extend({
    template: `<div class="container">
            <div class="jumbotron">
            <h1>Blogs</h1>
            <hr>
            <p>Blogs text</p>
            </div>
            </div>`
})

var eventsComponent = Vue.extend({
    template: `<div class="container">
            <div class="jumbotron">
            <h1>Events</h1>
            <hr>
<p>Here you can find pictures from our previous events and more information on our upcoming events!</p>
<header id="myCarousel" class="carousel slide" style="height: 400px;">
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
            <div class="item active">
                <div class="fill" style="background-image:url('https://placeholdit.imgix.net/~text?txtsize=28&bg=0099ff&txtclr=ffffff&txt=Slide&w=1000&h=1000&fm=png');"></div>
                <div class="carousel-caption">
                    <h2>Event 1</h2>
                </div>
            </div>
            <div class="item">
                <div class="fill" style="background-image:url('https://placeholdit.imgix.net/~text?txtsize=28&bg=0099ff&txtclr=ffffff&txt=Slide&w=1000&h=1000&fm=png');"></div>
                <div class="carousel-caption">
                    <h2>Event 2</h2>
                </div>
            </div>
            <div class="item">
                <div class="fill" style="background-image:url('https://placeholdit.imgix.net/~text?txtsize=28&bg=0099ff&txtclr=ffffff&txt=Slide&w=1000&h=1000&fm=png');"></div>
                <div class="carousel-caption">
                    <h2>Event 3</h2>
                </div>
            </div>
        </div>
        <!-- Controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="icon-prev"></span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="icon-next"></span>
        </a>
    </header>
    
    <p>Upcoming Events: embed Google Calendar here</p>

            <h1>Contact Us</h1>
            <hr>   
            <p>Email us through the form below, if you would like us to come to your event!</p>
                <form class="contact-form row" action="https://formspree.io/email@email.com" method="POST">
                    <div class="col-md-4">
                        <input type="text" name="name" class="form-control" placeholder="Name">
                    </div>
                    <div class="col-md-4">
                        <input type="email" name="_replyto" class="form-control" placeholder="Email" required>
                    </div>
                    <div class="col-md-4">
                        <input type="text" name="_subject" class="form-control" placeholder="Subject">
                    </div>
                    <div class="col-md-12">
                        <label></label>
                        <textarea name="message" class="form-control" rows="9" placeholder="Your message here.." required></textarea>
                  <input type="text" name="_gotcha" style="display:none"/>
                    </div>
                    <div class="col-md-4 col-md-offset-4">
                        <br />
                        <button type="submit" value="Send" class="btn btn-primary btn-lg">Send</button>
                    </div>
                </form>
            </div>
         </div>`
})

// Tell Vue to use view-router
Vue.use(VueRouter)

// Router options
var router = new VueRouter({
    history: false,
    root: '/'
})

// Router map for defining components
router.map({
    // For Not Found template
    '*': {
        component: notFound
    },

    '/': {
        component: sliderComponent,

        // Defining Subroutes
        subRoutes: {
            // '/subroute': {
            //      component: subRouteContent
            //    }
        }
    },

    '/about': {
        component: aboutComponent,
    },

    '/books': {
        component: booksComponent
    },

    '/blogs': {
        component: blogsComponent
    },

    '/events': {
        component: eventsComponent
    }
});

var App = Vue.extend()

router.start(App, '#app')