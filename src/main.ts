import "./style.css";
import { gsapOverlay } from "./gsap-fun/overlay";
import { slider } from "./gsap-fun/slider";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
    <div class="wrapper">
    <header>
      <h1 class="title">Orq?So</h1>
      <ul>
        <li><a href="#">orq?1${2}?so</a></li>
        <li><a href="#">orq?1${2}?so</a></li>
        <li><a href="#">orq?1${2}?so</a></li>
      </ul>
    </header>

     <div class="hero">

        <div class="col text-content">

          <h2 class="sub-title__hero">explore</h2>
          <h1 class="title__hero">Company?</h1>
          <p class="desc__hero">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos accusantium,
            deleniti quos aliquam mollitia dolores explicabo voluptatem laborum reprehenderit!
          </p>
          <div class="btn__hero">
            <div class="btn">
              <a href="#">Explore more</a>
            </div>
          </div>

        </div>

        <div class="col img-wrapper__hero cosm">
          <img
            src="https://uploads-ssl.webflow.com/64acf71c9b6f3280f9a826f6/64d3a3405763d40e476b0395_hackathon-planet.webp"
            alt="earth"/>
        </div>

    </div>

    <main class="main">

      <section class="bg" id="first">
        <div class="col img-wrapper__hero">
          <img
            src="https://uploads-ssl.webflow.com/64acf71c9b6f3280f9a826f6/64d3a3405763d40e476b0395_hackathon-planet.webp"
            alt="earth"/>
        </div>
      </section>

      <section class="info" id="second">
        <h1>Our experience in total</h1>
      </section>

      <section class="text-append" id="third">
        <div class="append-child-left">
          <h1>
            Our Experience
          </h1>  
          <p>
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla nisi quo aliquam omnis eaque vitae reiciendis tempore
              officiis consequuntur illum laudantium excepturi enim architecto accusantium labore quasi delectus ipsum, ut quas
              iste. Aut eligendi perferendis sunt quisquam sint vel a! Sapiente illum suscipit eveniet voluptates dolorum accusamus
              minima tempora porro, atque corrupti et molestiae rerum labore adipisci iure dolor dolore tempore, exercitationem
              laboriosam! Harum autem, nam nulla saepe optio, temporibus sunt debitis unde quidem nobis ab totam? Aliquam explicabo
              tempore dignissimos aut voluptas, rerum, quisquam cupiditate optio nihil natus porro repudiandae vero atque nisi hic
              facere quam nesciunt alias? Quo?
          </p>
        </div>
      </section>

       <section class="text-append" id="four">
        <div class="append-child-right">
          <h1>
            Our Experience
          </h1>  
          <p>
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla nisi quo aliquam omnis eaque vitae reiciendis tempore
              officiis consequuntur illum laudantium excepturi enim architecto accusantium labore quasi delectus ipsum, ut quas
              iste. Aut eligendi perferendis sunt quisquam sint vel a! Sapiente illum suscipit eveniet voluptates dolorum accusamus
              minima tempora porro, atque corrupti et molestiae rerum labore adipisci iure dolor dolore tempore, exercitationem
              laboriosam! Harum autem, nam nulla saepe optio, temporibus sunt debitis unde quidem nobis ab totam? Aliquam explicabo
              tempore dignissimos aut voluptas, rerum, quisquam cupiditate optio nihil natus porro repudiandae vero atque nisi hic
              facere quam nesciunt alias? Quo?
          </p>
        </div>
      </section>

      <section class="text-append" id="five">
        <div class="append-child-down-left">
          <p>
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla nisi quo aliquam omnis eaque vitae reiciendis tempore
              officiis consequuntur illum laudantium excepturi enim architecto accusantium labore quasi delectus ipsum, ut quas
              iste. Aut eligendi perferendis sunt quisquam sint vel a! Sapiente illum suscipit eveniet voluptates dolorum accusamus
              minima tempora porro, atque corrupti et molestiae rerum labore adipisci iure dolor dolore tempore, exercitationem
              laboriosam! Harum autem, nam nulla saepe optio, temporibus sunt debitis unde quidem nobis ab totam? Aliquam explicabo
              tempore dignissimos aut voluptas, rerum, quisquam cupiditate optio nihil natus porro repudiandae vero atque nisi hic
              facere quam nesciunt alias? Quo?
          </p>
           <h1>
            Our Experience
          </h1>  
        </div>
      </section>

      <section class="text-append" id="six">
        <div class="append-child-down-right">
         
          <p>
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla nisi quo aliquam omnis eaque vitae reiciendis tempore
              officiis consequuntur illum laudantium excepturi enim architecto accusantium labore quasi delectus ipsum, ut quas
              iste. Aut eligendi perferendis sunt quisquam sint vel a! Sapiente illum suscipit eveniet voluptates dolorum accusamus
              minima tempora porro, atque corrupti et molestiae rerum labore adipisci iure dolor dolore tempore, exercitationem
              laboriosam! Harum autem, nam nulla saepe optio, temporibus sunt debitis unde quidem nobis ab totam? Aliquam explicabo
              tempore dignissimos aut voluptas, rerum, quisquam cupiditate optio nihil natus porro repudiandae vero atque nisi hic
              facere quam nesciunt alias? Quo?
          </p>
           <h1>
            Our Experience
          </h1>  
        </div>
      </section>

    

    </main>

  <div class="bar"></div>

         <div class="wrapper-bg">
          <div class="plan">
		<div class="inner">
			<span class="pricing">
				<span>
					$49 <small>/ m</small>
				</span>
			</span>
			<p class="title">Professional</p>
			<p class="infoP">This plan is for those who have a team already and running a large business.</p>
			<ul class="features">
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span><strong>20</strong> team members</span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>Plan <strong>team meetings</strong></span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>File sharing</span>
				</li>
			</ul>
			<div class="action">
			<a class="button" href="#">
				Choose plan
			</a>
			</div>
		</div>
	</div>
            <div class="plan">
		<div class="inner">
			<span class="pricing">
				<span>
					$49 <small>/ m</small>
				</span>
			</span>
			<p class="title">Professional</p>
			<p class="infoP">This plan is for those who have a team already and running a large business.</p>
			<ul class="features">
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span><strong>20</strong> team members</span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>Plan <strong>team meetings</strong></span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>File sharing</span>
				</li>
			</ul>
			<div class="action">
			<a class="button" href="#">
				Choose plan
			</a>
			</div>
		</div>
	</div>
  <div class="plan">
		<div class="inner">
			<span class="pricing">
				<span>
					$49 <small>/ m</small>
				</span>
			</span>
			<p class="title">Professional</p>
			<p class="infoP">This plan is for those who have a team already and running a large business.</p>
			<ul class="features">
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span><strong>20</strong> team members</span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>Plan <strong>team meetings</strong></span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>File sharing</span>
				</li>
			</ul>
			<div class="action">
			<a class="button" href="#">
				Choose plan
			</a>
			</div>
		</div>
	</div>

       </div>

   <div class="container">
          <div class="card">
            <div class="percent" style="--clr: #04fc43; --n:85;">
              <div class="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div class="number">
                <p>Our expencis</p>
                <h2>85<span>%</span></h2>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="percent" style="--clr: #d63384; --n:45;">
              <div class="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div class="number">
                <p>Explored</p>
                <h2>45<span>%</span></h2>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="percent" style="--clr: #20c997; --n:22;">
              <div class="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div class="number">
                <p>More</p>
                <h2>22<span>%</span></h2>
              </div>
            </div>
          </div>
        </div>

  <div class="bgdots">
    <div class="dots"></div>
  </div>

  </div>


`;

const $ = document;
const parent = $.querySelector(".wrapper");
const bar = $.querySelector(".bar");

slider();
gsapOverlay({ bar, parent });
