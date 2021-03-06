/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Post = require('../api/post/post.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Post.find({}).remove(function() {
  Post.create(
    {
    title:'first',
    'date':1423603097000,
    'tags':[],
    content:'<p>Hello, <em>Terrence</em> here! I know you’ve been waiting a long time for this blog to come be reborn. A series of [misteps] , [mishaps] and comedy of errors. </p>\n',
    slug:'first',
    updated:1423603195000,
    excerpt:"",
    published:1,
    categories:[],
    comments:true,
    layout:"post",
    link:""
  },
  {
    "title":"Hello World",
    "content":"<p>Welcome to <a href=\"http://hexo.io/\" target=\"_blank\" rel=\"external\">Hexo</a>! This is your very first post. Check <a href=\"http://hexo.io/docs/\" target=\"_blank\" rel=\"external\">documentation</a> for more info. If you get any problems when using Hexo, you can find the answer in <a href=\"http://hexo.io/docs/troubleshooting.html\" target=\"_blank\" rel=\"external\">trobuleshooting</a> or you can ask me on <a href=\"https://github.com/hexojs/hexo/issues\" target=\"_blank\" rel=\"external\">GitHub</a>.</p>\n<h2 id=\"Quick_Start\">Quick Start</h2>\n<h3 id=\"Create_a_new_post\">Create a new post</h3>\n<figure class=\"highlight bash\"><table><tr><td class=\"gutter\"><pre><div class=\"line\">1</div></pre></td><td class=\"code\"><pre><div class=\"line\">$ hexo new <span class=\"string\">\"My New Post\"</span></div></pre></td></tr></table></figure>\n\n<p>More info: <a href=\"http://hexo.io/docs/writing.html\" target=\"_blank\" rel=\"external\">Writing</a></p>\n<h3 id=\"Run_server\">Run server</h3>\n<figure class=\"highlight bash\"><table><tr><td class=\"gutter\"><pre><div class=\"line\">1</div></pre></td><td class=\"code\"><pre><div class=\"line\">$ hexo server</div></pre></td></tr></table></figure>\n\n<p>More info: <a href=\"http://hexo.io/docs/server.html\" target=\"_blank\" rel=\"external\">Server</a></p>\n<h3 id=\"Generate_static_files\">Generate static files</h3>\n<figure class=\"highlight bash\"><table><tr><td class=\"gutter\"><pre><div class=\"line\">1</div></pre></td><td class=\"code\"><pre><div class=\"line\">$ hexo generate</div></pre></td></tr></table></figure>\n\n<p>More info: <a href=\"http://hexo.io/docs/generating.html\" target=\"_blank\" rel=\"external\">Generating</a></p>\n<h3 id=\"Deploy_to_remote_sites\">Deploy to remote sites</h3>\n<figure class=\"highlight bash\"><table><tr><td class=\"gutter\"><pre><div class=\"line\">1</div></pre></td><td class=\"code\"><pre><div class=\"line\">$ hexo deploy</div></pre></td></tr></table></figure>\n\n<p>More info: <a href=\"http://hexo.io/docs/deployment.html\" target=\"_blank\" rel=\"external\">Deployment</a></p>\n","source":"_posts/hello-world.md","raw":"title: Hello World\n---\nWelcome to [Hexo](http://hexo.io/)! This is your very first post. Check [documentation](http://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [trobuleshooting](http://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).\n\n## Quick Start\n\n### Create a new post\n\n``` bash\n$ hexo new \"My New Post\"\n```\n\nMore info: [Writing](http://hexo.io/docs/writing.html)\n\n### Run server\n\n``` bash\n$ hexo server\n```\n\nMore info: [Server](http://hexo.io/docs/server.html)\n\n### Generate static files\n\n``` bash\n$ hexo generate\n```\n\nMore info: [Generating](http://hexo.io/docs/generating.html)\n\n### Deploy to remote sites\n\n``` bash\n$ hexo deploy\n```\n\nMore info: [Deployment](http://hexo.io/docs/deployment.html)",
    "slug":"hello-world",
    "date":1423602819000,
    "updated":1423602819000,
    "excerpt":"",
    "categories":[],
    "tags":[],
    "comments":true,
    "layout":"post",
    published:1,
    "photos":[],
    "link":""
  },
  {
    "title":"Sample Post",
    "content":" <div class=\"row\"><div class=\"col-sm-8 blog-main\"><div class=\"blog-post\"><h2 class=\"blog-post-title\">Sample blog post</h2><p class=\"blog-post-meta\">January 1, 2014 by <a href=\"#\">Mark</a></p><p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>       <hr>          <p>Cum sociis natoque penatibus et magnis <a href=\"#\">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>            <blockquote>              <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>            </blockquote>            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>            <h2>Heading</h2>            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>            <h3>Sub-heading</h3>            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>            <pre><code>Example code block</code></pre>            <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>            <h3>Sub-heading</h3>            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>            <ul>              <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>              <li>Donec id elit non mi porta gravida at eget metus.</li>              <li>Nulla vitae elit libero, a pharetra augue.</li>            </ul>            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>           <ol>              <li>Vestibulum id ligula porta felis euismod semper.</li>              <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>              <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>            </ol>            <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>          </div><!-- /.blog-post -->",
    "slug":"hello-world",
    "date":1423602819000,
    "updated":1423602819000,
    "excerpt":"",
    "categories":[],
    "tags":[],
    "comments":true,
    "layout":"post",
    "link":""
  },
  {
    "title":"Hello World",
    "content":"<p>Welcome to <a href=\"http://hexo.io/\" target=\"_blank\" rel=\"external\">Hexo</a>! This is your very first post. Check <a href=\"http://hexo.io/docs/\" target=\"_blank\" rel=\"external\">documentation</a> for more info. If you get any problems when using Hexo, you can find the answer in <a href=\"http://hexo.io/docs/troubleshooting.html\" target=\"_blank\" rel=\"external\">trobuleshooting</a> or you can ask me on <a href=\"https://github.com/hexojs/hexo/issues\" target=\"_blank\" rel=\"external\">GitHub</a>.</p>\n<h2 id=\"Quick_Start\">Quick Start</h2>\n<h3 id=\"Create_a_new_post\">Create a new post</h3>\n<figure class=\"highlight bash\"><table><tr><td class=\"gutter\"><pre><div class=\"line\">1</div></pre></td><td class=\"code\"><pre><div class=\"line\">$ hexo new <span class=\"string\">\"My New Post\"</span></div></pre></td></tr></table></figure>\n\n<p>More info: <a href=\"http://hexo.io/docs/writing.html\" target=\"_blank\" rel=\"external\">Writing</a></p>\n<h3 id=\"Run_server\">Run server</h3>\n<figure class=\"highlight bash\"><table><tr><td class=\"gutter\"><pre><div class=\"line\">1</div></pre></td><td class=\"code\"><pre><div class=\"line\">$ hexo server</div></pre></td></tr></table></figure>\n\n<p>More info: <a href=\"http://hexo.io/docs/server.html\" target=\"_blank\" rel=\"external\">Server</a></p>\n<h3 id=\"Generate_static_files\">Generate static files</h3>\n<figure class=\"highlight bash\"><table><tr><td class=\"gutter\"><pre><div class=\"line\">1</div></pre></td><td class=\"code\"><pre><div class=\"line\">$ hexo generate</div></pre></td></tr></table></figure>\n\n<p>More info: <a href=\"http://hexo.io/docs/generating.html\" target=\"_blank\" rel=\"external\">Generating</a></p>\n<h3 id=\"Deploy_to_remote_sites\">Deploy to remote sites</h3>\n<figure class=\"highlight bash\"><table><tr><td class=\"gutter\"><pre><div class=\"line\">1</div></pre></td><td class=\"code\"><pre><div class=\"line\">$ hexo deploy</div></pre></td></tr></table></figure>\n\n<p>More info: <a href=\"http://hexo.io/docs/deployment.html\" target=\"_blank\" rel=\"external\">Deployment</a></p>\n","source":"_posts/hello-world.md","raw":"title: Hello World\n---\nWelcome to [Hexo](http://hexo.io/)! This is your very first post. Check [documentation](http://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [trobuleshooting](http://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).\n\n## Quick Start\n\n### Create a new post\n\n``` bash\n$ hexo new \"My New Post\"\n```\n\nMore info: [Writing](http://hexo.io/docs/writing.html)\n\n### Run server\n\n``` bash\n$ hexo server\n```\n\nMore info: [Server](http://hexo.io/docs/server.html)\n\n### Generate static files\n\n``` bash\n$ hexo generate\n```\n\nMore info: [Generating](http://hexo.io/docs/generating.html)\n\n### Deploy to remote sites\n\n``` bash\n$ hexo deploy\n```\n\nMore info: [Deployment](http://hexo.io/docs/deployment.html)",
    "slug":"hello-world",
    "date":1423602819000,
    "updated":1423602819000,
    "excerpt":"",
    "categories":[],
    "tags":[],
    "comments":true,
    "layout":"post",
    "photos":[],
    "link":""
  },
  {
    "title":"Hello World",
    "content":"<p>Welcome to <a href=\"http://hexo.io/\" target=\"_blank\" rel=\"external\">Hexo</a>! This is your very first post. Check <a href=\"http://hexo.io/docs/\" target=\"_blank\" rel=\"external\">documentation</a> for more info. If you get any problems when using Hexo, you can find the answer in <a href=\"http://hexo.io/docs/troubleshooting.html\" target=\"_blank\" rel=\"external\">trobuleshooting</a> or you can ask me on <a href=\"https://github.com/hexojs/hexo/issues\" target=\"_blank\" rel=\"external\">GitHub</a>.</p>\n<h2 id=\"Quick_Start\">Quick Start</h2>\n<h3 id=\"Create_a_new_post\">Create a new post</h3>\n<figure class=\"highlight bash\"><table><tr><td class=\"gutter\"><pre><div class=\"line\">1</div></pre></td><td class=\"code\"><pre><div class=\"line\">$ hexo new <span class=\"string\">\"My New Post\"</span></div></pre></td></tr></table></figure>\n\n<p>More info: <a href=\"http://hexo.io/docs/writing.html\" target=\"_blank\" rel=\"external\">Writing</a></p>\n<h3 id=\"Run_server\">Run server</h3>\n<figure class=\"highlight bash\"><table><tr><td class=\"gutter\"><pre><div class=\"line\">1</div></pre></td><td class=\"code\"><pre><div class=\"line\">$ hexo server</div></pre></td></tr></table></figure>\n\n<p>More info: <a href=\"http://hexo.io/docs/server.html\" target=\"_blank\" rel=\"external\">Server</a></p>\n<h3 id=\"Generate_static_files\">Generate static files</h3>\n<figure class=\"highlight bash\"><table><tr><td class=\"gutter\"><pre><div class=\"line\">1</div></pre></td><td class=\"code\"><pre><div class=\"line\">$ hexo generate</div></pre></td></tr></table></figure>\n\n<p>More info: <a href=\"http://hexo.io/docs/generating.html\" target=\"_blank\" rel=\"external\">Generating</a></p>\n<h3 id=\"Deploy_to_remote_sites\">Deploy to remote sites</h3>\n<figure class=\"highlight bash\"><table><tr><td class=\"gutter\"><pre><div class=\"line\">1</div></pre></td><td class=\"code\"><pre><div class=\"line\">$ hexo deploy</div></pre></td></tr></table></figure>\n\n<p>More info: <a href=\"http://hexo.io/docs/deployment.html\" target=\"_blank\" rel=\"external\">Deployment</a></p>\n","source":"_posts/hello-world.md","raw":"title: Hello World\n---\nWelcome to [Hexo](http://hexo.io/)! This is your very first post. Check [documentation](http://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [trobuleshooting](http://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).\n\n## Quick Start\n\n### Create a new post\n\n``` bash\n$ hexo new \"My New Post\"\n```\n\nMore info: [Writing](http://hexo.io/docs/writing.html)\n\n### Run server\n\n``` bash\n$ hexo server\n```\n\nMore info: [Server](http://hexo.io/docs/server.html)\n\n### Generate static files\n\n``` bash\n$ hexo generate\n```\n\nMore info: [Generating](http://hexo.io/docs/generating.html)\n\n### Deploy to remote sites\n\n``` bash\n$ hexo deploy\n```\n\nMore info: [Deployment](http://hexo.io/docs/deployment.html)",
    "slug":"hello-world",
    "date":1423602819000,
    "updated":1423602819000,
    "excerpt":"",
    "categories":[],
    "tags":[],
    "comments":true,
    "layout":"post",
    "photos":[],
    "link":""
  },
  {
    "title":"Hello World",
    "content":"<p>Welcome to <a href=\"http://hexo.io/\" target=\"_blank\" rel=\"external\">Hexo</a>! This is your very first post. Check <a href=\"http://hexo.io/docs/\" target=\"_blank\" rel=\"external\">documentation</a> for more info. If you get any problems when using Hexo, you can find the answer in <a href=\"http://hexo.io/docs/troubleshooting.html\" target=\"_blank\" rel=\"external\">trobuleshooting</a> or you can ask me on <a href=\"https://github.com/hexojs/hexo/issues\" target=\"_blank\" rel=\"external\">GitHub</a>.</p>\n<h2 id=\"Quick_Start\">Quick Start</h2>\n<h3 id=\"Create_a_new_post\">Create a new post</h3>\n<figure class=\"highlight bash\"><table><tr><td class=\"gutter\"><pre><div class=\"line\">1</div></pre></td><td class=\"code\"><pre><div class=\"line\">$ hexo new <span class=\"string\">\"My New Post\"</span></div></pre></td></tr></table></figure>\n\n<p>More info: <a href=\"http://hexo.io/docs/writing.html\" target=\"_blank\" rel=\"external\">Writing</a></p>\n<h3 id=\"Run_server\">Run server</h3>\n<figure class=\"highlight bash\"><table><tr><td class=\"gutter\"><pre><div class=\"line\">1</div></pre></td><td class=\"code\"><pre><div class=\"line\">$ hexo server</div></pre></td></tr></table></figure>\n\n<p>More info: <a href=\"http://hexo.io/docs/server.html\" target=\"_blank\" rel=\"external\">Server</a></p>\n<h3 id=\"Generate_static_files\">Generate static files</h3>\n<figure class=\"highlight bash\"><table><tr><td class=\"gutter\"><pre><div class=\"line\">1</div></pre></td><td class=\"code\"><pre><div class=\"line\">$ hexo generate</div></pre></td></tr></table></figure>\n\n<p>More info: <a href=\"http://hexo.io/docs/generating.html\" target=\"_blank\" rel=\"external\">Generating</a></p>\n<h3 id=\"Deploy_to_remote_sites\">Deploy to remote sites</h3>\n<figure class=\"highlight bash\"><table><tr><td class=\"gutter\"><pre><div class=\"line\">1</div></pre></td><td class=\"code\"><pre><div class=\"line\">$ hexo deploy</div></pre></td></tr></table></figure>\n\n<p>More info: <a href=\"http://hexo.io/docs/deployment.html\" target=\"_blank\" rel=\"external\">Deployment</a></p>\n","source":"_posts/hello-world.md","raw":"title: Hello World\n---\nWelcome to [Hexo](http://hexo.io/)! This is your very first post. Check [documentation](http://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [trobuleshooting](http://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).\n\n## Quick Start\n\n### Create a new post\n\n``` bash\n$ hexo new \"My New Post\"\n```\n\nMore info: [Writing](http://hexo.io/docs/writing.html)\n\n### Run server\n\n``` bash\n$ hexo server\n```\n\nMore info: [Server](http://hexo.io/docs/server.html)\n\n### Generate static files\n\n``` bash\n$ hexo generate\n```\n\nMore info: [Generating](http://hexo.io/docs/generating.html)\n\n### Deploy to remote sites\n\n``` bash\n$ hexo deploy\n```\n\nMore info: [Deployment](http://hexo.io/docs/deployment.html)",
    "slug":"hello-world",
    "date":1423602819000,
    "updated":1423602819000,
    "excerpt":"",
    "_id":"t0pud0u6x64mzu40",
    "categories":[],
    "tags":[],
    "comments":true,
    "layout":"post",
    "photos":[],
    "link":""
  },
  {
    "title":"Hello World",
    "content":"<p>Welcome to <a href=\"http://hexo.io/\" target=\"_blank\" rel=\"external\">Hexo</a>! This is your very first post. Check <a href=\"http://hexo.io/docs/\" target=\"_blank\" rel=\"external\">documentation</a> for more info. If you get any problems when using Hexo, you can find the answer in <a href=\"http://hexo.io/docs/troubleshooting.html\" target=\"_blank\" rel=\"external\">trobuleshooting</a> or you can ask me on <a href=\"https://github.com/hexojs/hexo/issues\" target=\"_blank\" rel=\"external\">GitHub</a>.</p>\n<h2 id=\"Quick_Start\">Quick Start</h2>\n<h3 id=\"Create_a_new_post\">Create a new post</h3>\n<figure class=\"highlight bash\"><table><tr><td class=\"gutter\"><pre><div class=\"line\">1</div></pre></td><td class=\"code\"><pre><div class=\"line\">$ hexo new <span class=\"string\">\"My New Post\"</span></div></pre></td></tr></table></figure>\n\n<p>More info: <a href=\"http://hexo.io/docs/writing.html\" target=\"_blank\" rel=\"external\">Writing</a></p>\n<h3 id=\"Run_server\">Run server</h3>\n<figure class=\"highlight bash\"><table><tr><td class=\"gutter\"><pre><div class=\"line\">1</div></pre></td><td class=\"code\"><pre><div class=\"line\">$ hexo server</div></pre></td></tr></table></figure>\n\n<p>More info: <a href=\"http://hexo.io/docs/server.html\" target=\"_blank\" rel=\"external\">Server</a></p>\n<h3 id=\"Generate_static_files\">Generate static files</h3>\n<figure class=\"highlight bash\"><table><tr><td class=\"gutter\"><pre><div class=\"line\">1</div></pre></td><td class=\"code\"><pre><div class=\"line\">$ hexo generate</div></pre></td></tr></table></figure>\n\n<p>More info: <a href=\"http://hexo.io/docs/generating.html\" target=\"_blank\" rel=\"external\">Generating</a></p>\n<h3 id=\"Deploy_to_remote_sites\">Deploy to remote sites</h3>\n<figure class=\"highlight bash\"><table><tr><td class=\"gutter\"><pre><div class=\"line\">1</div></pre></td><td class=\"code\"><pre><div class=\"line\">$ hexo deploy</div></pre></td></tr></table></figure>\n\n<p>More info: <a href=\"http://hexo.io/docs/deployment.html\" target=\"_blank\" rel=\"external\">Deployment</a></p>\n","source":"_posts/hello-world.md","raw":"title: Hello World\n---\nWelcome to [Hexo](http://hexo.io/)! This is your very first post. Check [documentation](http://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [trobuleshooting](http://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).\n\n## Quick Start\n\n### Create a new post\n\n``` bash\n$ hexo new \"My New Post\"\n```\n\nMore info: [Writing](http://hexo.io/docs/writing.html)\n\n### Run server\n\n``` bash\n$ hexo server\n```\n\nMore info: [Server](http://hexo.io/docs/server.html)\n\n### Generate static files\n\n``` bash\n$ hexo generate\n```\n\nMore info: [Generating](http://hexo.io/docs/generating.html)\n\n### Deploy to remote sites\n\n``` bash\n$ hexo deploy\n```\n\nMore info: [Deployment](http://hexo.io/docs/deployment.html)",
    "slug":"hello-world",
    "date":1423602819000,
    "updated":1423602819000,
    "excerpt":"",
    "_id":"t0pud0u6x64mzu41",
    "categories":[],
    "tags":[],
    "comments":true,
    "layout":"post",
    "photos":[],
    "link":""
  }, function() {
    console.log('finished populating posts');
  }
  );
})
