import React from 'react'

export default function About(props) {
  return (
    <div className='container  p-5' >
      <h2 className='text-center display-5  ' >About Our Wesbite</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className={`accordion-button bg-${props.accBg}  text-${props.textCol}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Have some text that needs to be in UPPERCASE?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className={`accordion-body  bg-${props.accBg}  text-${props.textCol} ` }>
        <strong>Convert Text to UpperCase: </strong> Just input your text in the designated box, hit the "Convert to UPPERCASE" button, and voilà! Your text will be instantly transformed to UPPERCASE.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ab natus delectus eligendi. Soluta odio id earum, unde rerum ratione illum sapiente aut fugiat! Voluptatem, eveniet deserunt tempora eaque adipisci repellendus quaerat consectetur explicabo.          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, obcaecati deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis earum voluptatem itaque nesciunt molestias temporibus doloribus animi quod est dolore quasi mollitia perferendis commodi in voluptate maiores, ratione assumenda alias eum tempora. Neque, laudantium deleniti libero debitis saepe maiores, nesciunt necessitatibus esse error alias reiciendis quos odio voluptas quas? Praesentium ut corporis, vitae, incidunt a facere maxime repellat tempore provident esse voluptatibus quasi deleniti repellendus odit ducimus nam cumque! Nisi sunt illo quaerat sit non facilis.  </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className={`accordion-button bg-${props.accBg}  text-${props.textCol} collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Have some text that needs to be in UPPERCASE?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className={`accordion-body  bg-${props.accBg}   text-${props.textCol}` }>
        <strong>Convert Text to LowerCase:</strong> Need your text in lowercase instead? No problem! Input your text, click on the "Convert to lowercase" button, and presto! Your text will be converted to lowercase in a blink. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio pariatur voluptates quod eligendi aut rerum consequatur. Eius similique, magni nemo recusandae beatae aspernatur commodi natus quo veritatis esse exercitationem, aliquid deleniti optio quidem ipsam. Id, natus illum a magni quidem hic reiciendis delectus quisquam earum placeat consectetur reprehenderit iusto ipsam non eveniet eaque sapiente.</div>
       

    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className={`accordion-button bg-${props.accBg}  text-${props.textCol} collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Made a Mistake
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className={`accordion-body  bg-${props.accBg}  text-${props.textCol} `  }>
      Made a mistake or want to start afresh? Simply hit the "Reset" button, and the input box will be cleared, ready for your next input. It's that easy!Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsum deleniti dignissimos dolores unde dolorem earum vitae illum veritatis voluptatem. Repudiandae fuga in optio corrupti perferendis laboriosam dolorem, nisi libero reiciendis alias ad! Dolores harum nihil eius asperiores mollitia doloribus, laborum quaerat tempore voluptatum nostrum adipisci sint! Suscipit sed consequatur tenetur, nemo quam quae sint, cupiditate molestias ipsam consequuntur id vero, qui neque illo. Vel dignissimos repellat beatae distinctio. Architecto inventore illum, consequatur quo voluptatem aliquam cum et amet ullam facere! Cum ducimus, hic dolorem provident incidunt adipisci, libero illum sint iste iusto, corporis molestiae natus ipsum dolores!   </div>
      
    </div>
  </div>
</div>
    </div>
  )
}
