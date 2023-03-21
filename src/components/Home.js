import React from "react";
import { Link } from "wouter";
import "./home.css";
const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>Welcome to Codebuddy</h1>
          <br />
          <br />
          <p>
            At Codebuddy, we believe that becoming a software developer should
            be accessible to everyone, regardless of their background or
            experience. Our platform offers a one-stop-shop for all your
            software development needs, from free resources and tutorials to
            expert mentorship. Our experienced mentors have been in the industry
            for years and are ready to guide you through your journey to
            becoming a successful software developer.
          </p>
          <br></br>

          <p>
            We understand that not everyone has a degree in computer science or
            has had the opportunity to attend a bootcamp, which is why we offer
            a leveled playing field for all. With Codebuddy, you'll have access
            to the same resources and mentorship as those who have gone through
            traditional routes, at a fraction of the cost. Our goal is to help
            you achieve your desired job in no time. Whether you're looking to
            switch careers or just starting out, we're here to support you every
            step of the way. Join the Codebuddy community today and take the
            first step towards your career as a software developer.
          </p>
          <br></br>
          <p>
            For just £99 a month, you'll gain access to a wealth of knowledge
            and resources that will help you achieve your dream of becoming a
            skilled software developer. Our comprehensive platform provides
            everything you need to succeed, from free resources to expert
            mentorship, and all at a fraction of the cost of traditional
            training methods. With Codebuddy by your side, the possibilities are
            endless. So why wait? Join today and unlock your full potential!
          </p>
          <div className="mb-3">
            <Link href="/payment">
              <button className="btn btn-primary mr-2">Pay now</button>
            </Link>
            <Link href="/connect">
              <button className="btn btn-secondary">Connect</button>
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src="https://assets.entrepreneur.com/content/3x2/2000/1649279368-Ent-2022Python.jpeg"
            alt="placeholder"
            className="rounded-circle img-fluid"
            width="800"
            height="800"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-3">
          <div className="text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqeiMvcMA8ATx6McIgv0QgGq9njL6_9Q9Ww&usqp=CAU"
              alt="placeholder"
              className="rounded-circle img-fluid"
            />
            <h5 className="mt-2 mb-0">David Frazer</h5>
            <p className="text-muted">
              Javascript, HTML, CSS
              <br></br>Senior Frontend developer
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCcJKlkD0jgxu_zvB-2QiuD7V3YAq75r9NtA&usqp=CAU"
              alt="placeholder"
              className="rounded-circle img-fluid"
              width="500"
              height="500"
            />
            <h5 className="mt-2 mb-0">Joe Bloggs</h5>
            <p className="text-muted">
              {" "}
              Kotlin, React native
              <br></br>Senior Android developer
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="text-center">
            <img
              src="https://media.istockphoto.com/id/1318482009/photo/young-woman-ready-for-job-business-concept.jpg?b=1&s=170667a&w=0&k=20&c=qr9IZO49bYbal9ID9FzvVDe_V6GdcZhY9a3eGbeL4E0="
              alt="placeholder"
              width="500"
              height="500"
              className="rounded-circle img-fluid"
            />
            <h5 className="mt-2 mb-0">Sarah Pat</h5>
            <p className="text-muted">
              C#, Java
              <br></br>Senior DevOp
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3s6CT21GF1ZzSQkx0W9GwauFKLbGExLE1SQ&usqp=CAU"
              alt="placeholder"
              width="200"
              height="200"
              className="rounded-circle img-fluid"
            />
            <h5 className="mt-2 mb-0">David Jones</h5>
            <p className="text-muted">
              Javascript, Python, C++
              <br></br>Senior Automation developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
