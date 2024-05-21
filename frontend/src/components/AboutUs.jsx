import React ,{useEffect} from "react";

const AboutUs = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  
  return (
    <div className="pt-20 pl-5 text-xl">
       <h1 className=" align-middle text-center pb-10 text-3xl">DUMMY TEXT</h1>

      Welcome to Book Store, where the love for reading comes alive! Nestled in the heart of the community, Book Store is your quintessential local bookstore, offering a sanctuary for book lovers of all ages. Our mission is simple: to foster a love for reading and to be a hub for literary exploration.

    <span className=" text-2xl font-bold "><br />Our Story <br /></span>

Book Store was founded in 2024 by a group of passionate bibliophiles who envisioned a space where stories come to life and imagination knows no bounds. Over the years, we have grown from a small corner shop to a beloved destination for readers near and far. Our commitment to providing a personalized and enriching experience has been the cornerstone of our journey.

<span className=" text-2xl font-bold "><br />What We Offer <br /></span>


<span className=" text-2xl font-bold "><br />Diverse Selection :<br /></span> From the latest bestsellers to timeless classics, our carefully curated collection spans various genres and interests. Whether you're seeking fiction, non-fiction, children's books, or rare finds, you'll discover a treasure trove of literary gems.
<span className=" text-2xl font-bold "><br />Community Events:<br /></span> At Book Store, we believe in the power of community. We regularly host author signings, book clubs, poetry readings, and workshops to engage and inspire our patrons.
<span className=" text-2xl font-bold "><br />Knowledgeable Staff:<br /></span> Our team of friendly and knowledgeable staff are always on hand to offer personalized recommendations and share their love for books. Whether you need help finding your next great read or want to discuss your favorite stories, we're here to chat.
<span className=" text-2xl font-bold "><br />Cozy Ambiance:<br /></span> Our bookstore offers a warm and inviting atmosphere, perfect for leisurely browsing or diving into a book. With comfortable seating areas and a dedicated children's corner, Book Store is a place where you can relax and escape into the world of literature.
<span className=" text-2xl font-bold "><br />Our Commitment<br /></span>

We are committed to promoting literacy and education within our community. Through various initiatives and partnerships with local schools and organizations, we strive to make books accessible to everyone. At Book Store, we believe that books have the power to change lives, and we are dedicated to being a part of that change.

Thank you for being a part of our story. Whether you're a lifelong reader or just beginning your literary journey, we invite you to explore, discover, and share in the joy of reading at Book Store.
    </div>
  );
};

export default AboutUs;
