import React from 'react'
import { useEffect, useState } from "react";
import { ReactComponent as MenuIcon } from "../../assets/svg/menu-item.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NavbarDark from '../components/basic/NavbarDark';
import { BiChevronLeft } from 'react-icons/bi'
import Footer from '../components/major/Footer';

const SingleBlog = () => {
  const params = useParams();
  const navigate = useNavigate();

  console.log(params.blogname)
  return (
    <section>
      <NavbarDark />


      <section className='px-32 mt-20'>

        <div className='justify-center flex'>
          <img src={require("../assets/img/big-rectangle.png")} className='w-full' alt="" />
        </div>

        <section className='justify-center flex'>
          <div className='content w-full'>
            <h6 className="font-[500] text-xl my-5">WEDDINGS</h6>
            <h6 className="font-[400] text-[14px]">20. 04. 2023 - PRESS</h6>

            <p className="font-[500] text-lg mt-3">
              It was a blast at the wedding ceremony of the year as we can say at
              Deesignal Media, as we filmed and captured beautiful moments from the
              attendees of “Tayo&Ife2023” Happy Matrimony.
            </p>

            <p className="text-gray-600 mt-4 font-light tracking-wide">
              Lorem ipsum dolor sit amet, consectetpiscing elit.ean mmodo ligulaet dolor. Aenean massa. Cum sociis natnatibus et magnis irturienntes, nascetur sociis natnatibus et magnisrienntes, nascetur mmodo ligulaet dolor. Aenean maa. Cum Lorem ipsum dolor sit amet, consectetpiscing elit.ean mmodo ligulaet dolor. Aenean massa. Cum sociis natnatibus et magnis irturienntes, nascetur sociis natnatibus et magnisrienntes, nascetur mmodo ligulaet dolor. Aenean maa. Cum...
              <br /><br />
              Lorem ipsum dolor sit amet, consectetpiscing elit.ean mmodo ligulaet dolor. Aenean massa. Cum sociis natnatibus et magnis irturienntes, nascetur sociis natnatibus et magnisrienntes, nascetur mmodo ligulaet dolor. Aenean maa. Cum Lorem ipsum dolor sit amet, consectetpiscing elit.ean mmodo ligulaet dolor. Aenean massa. Cum sociis natnatibus et magnis irturienntes, nascetur sociis natnatibus et magnisrienntes, nascetur mmodo ligulaet dolor. Aenean maa. Cum...
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
              <br /><br />
              Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

            </p>


            <button className='flex items-center gap-2 mt-5' onClick={() => navigate(-1)}>
              <BiChevronLeft />
              <span>Back to Blog</span>
            </button>
          </div>



        </section>


      </section>


      <div className='mt-20'>
        <Footer />
      </div>
    </section>
  )
}

export default SingleBlog