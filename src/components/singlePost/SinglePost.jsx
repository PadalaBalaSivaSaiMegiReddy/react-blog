import "./singlePost.css";
export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
            <img className='singlePostImg' src='https://images.pexels.com/photos/774054/pexels-photo-774054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='' />
            <h1 className='singlePostTitle'>
                Lorem ipsum dolor sit amet.
                <div className='singlePostEdit'>
                    <i className='singlePostIcon far fa-edit'></i>
                    <i className='singlePostIcon far fa-trash-alt'></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author:<b>Megi</b>
                    </span>
                    <span className="singlePostDate">
                    1 hour ago
                    </span>
            </div>
            <p className='singlePostDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam excepturi eveniet officiis aut magni deleniti asperiores sequi pariatur ad fuga error dignissimos aspernatur assumenda maxime blanditiis impedit similique facilis, minus esse neque qui! Magni quae voluptatum laborum explicabo hic aliquid, debitis quod labore aperiam, dolorem, sint quo. Placeat ullam reiciendis, suscipit laboriosam molestias accusantium dolor officiis. Quo provident doloribus deserunt nostrum tempore enim explicabo quia expedita dignissimos assumenda maxime suscipit ut tenetur sed ipsa ipsam cupiditate, corrupti a impedit labore eum consequuntur cum nemo soluta. Voluptatem, quae quasi eos commodi quas, tempore assumenda error molestiae repudiandae, fugiat asperiores provident nam adipisci natus. Enim distinctio numquam exercitationem molestiae pariatur voluptas accusantium velit vero, tempora eius possimus temporibus nobis deleniti aspernatur aut totam perferendis ut? Numquam ex possimus nisi laboriosam reprehenderit corporis, repellendus natus modi tempore sequi. Expedita doloremque cumque enim neque aut quaerat tempora iusto? Cupiditate odio maiores dolore voluptatum eum explicabo atque provident incidunt, placeat nam, qui magnam nesciunt saepe sapiente quisquam facilis omnis quod distinctio ab rerum consequatur similique eius? Animi, voluptate odit excepturi nulla hic repellat deleniti, quis reiciendis quia nam optio quaerat placeat neque! Dolores, aspernatur ducimus. Ea voluptatem esse repellendus natus rem nisi quis iure perferendis!            
                </p>
            </div>

        

    </div>
  )
}
