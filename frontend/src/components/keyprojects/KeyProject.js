/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const KeyProject = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className='bg-black'>
      <header>
        <div className='container text-center'>
          <p>Key Projects</p>
        </div>
      </header>

      <section className='timeline'>
        <div className='container'>
          <div className='timeline-item'>
            <div className='timeline-img'></div>

            <div className='timeline-content ' data-aos='fade-left'>
              <h2>Project</h2>
              <div className='date'>1 MAY 2016</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                ipsa ratione omnis alias cupiditate saepe atque totam aperiam
                sed nulla voluptatem recusandae dolor, nostrum excepturi amet in
                dolores. Alias, ullam.
              </p>
              <a className='bnt-more timeline-a' href='#'>
                More
              </a>
            </div>
          </div>

          <div className='timeline-item'>
            <div className='timeline-img'></div>

            <div
              className='timeline-content timeline-card'
              data-aos='fade-right'
            >
              <div className='timeline-img-header'>
                <h2>Card Title</h2>
              </div>
              <div className='date'>25 MAY 2016</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                ipsa ratione omnis alias cupiditate saepe atque totam aperiam
                sed nulla voluptatem recusandae dolor, nostrum excepturi amet in
                dolores. Alias, ullam.
              </p>
              <a className='bnt-more timeline-a' href='#'>
                More
              </a>
            </div>
          </div>

          <div className='timeline-item'>
            <div className='timeline-img'></div>

            <div className='timeline-content ' data-aos='fade-left'>
              <div className='date'>3 JUN 2016</div>
              <h2>project</h2>
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                explicabo debitis omnis dolor iste fugit totam quasi inventore!
              </blockquote>
            </div>
          </div>

          <div className='timeline-item'>
            <div className='timeline-img'></div>

            <div className='timeline-content ' data-aos='fade-right'>
              <h2>Title</h2>
              <div className='date'>22 JUN 2016</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                ipsa ratione omnis alias cupiditate saepe atque totam aperiam
                sed nulla voluptatem recusandae dolor, nostrum excepturi amet in
                dolores. Alias, ullam.
              </p>
              <a className='bnt-more timeline-a' href='#'>
                More
              </a>
            </div>
          </div>

          <div className='timeline-item'>
            <div className='timeline-img'></div>

            <div
              className='timeline-content timeline-card '
              data-aos='fade-left'
            >
              <div className='timeline-img-header'>
                <h2>Card Title</h2>
              </div>
              <div className='date'>10 JULY 2016</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                ipsa ratione omnis alias cupiditate saepe atque totam aperiam
                sed nulla voluptatem recusandae dolor, nostrum excepturi amet in
                dolores. Alias, ullam.
              </p>
              <a className='bnt-more timeline-a' href='#'>
                More
              </a>
            </div>
          </div>

          <div className='timeline-item'>
            <div className='timeline-img'></div>

            <div
              className='timeline-content timeline-card '
              data-aos='fade-right'
            >
              <div className='timeline-img-header'>
                <h2>Card Title</h2>
              </div>
              <div className='date'>30 JULY 2016</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                ipsa ratione omnis alias cupiditate saepe atque totam aperiam
                sed nulla voluptatem recusandae dolor, nostrum excepturi amet in
                dolores. Alias, ullam.
              </p>
              <a className='bnt-more timeline-a' href='#'>
                More
              </a>
            </div>
          </div>

          <div className='timeline-item'>
            <div className='timeline-img'></div>

            <div className='timeline-content ' data-aos='fade-left'>
              <div className='date'>5 AUG 2016</div>
              <h2>Project</h2>
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                explicabo debitis omnis dolor iste fugit totam quasi inventore!
              </blockquote>
            </div>
          </div>

          <div className='timeline-item'>
            <div className='timeline-img'></div>

            <div
              className='timeline-content timeline-card '
              data-aos='fade-right'
            >
              <div className='timeline-img-header'>
                <h2>Card Title</h2>
              </div>
              <div className='date'>19 AUG 2016</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                ipsa ratione omnis alias cupiditate saepe atque totam aperiam
                sed nulla voluptatem recusandae dolor, nostrum excepturi amet in
                dolores. Alias, ullam.
              </p>
              <a className='bnt-more timeline-a' href='#'>
                More
              </a>
            </div>
          </div>

          <div className='timeline-item'>
            <div className='timeline-img'></div>

            <div className='timeline-content ' data-aos='fade-left'>
              <div className='date'>1 SEP 2016</div>
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                ipsa ratione omnis alias cupiditate saepe atque totam aperiam
                sed nulla voluptatem recusandae dolor, nostrum excepturi amet in
                dolores. Alias, ullam.
              </p>
              <a className='bnt-more timeline-a' href='#'>
                More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyProject;
