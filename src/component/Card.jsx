export function Card(){
    return (
    <div className="d-flex flex-wrap justify-content-around">
    <div className="card" style={{width:"18rem"}}>
    <img src="https://assets-global.website-files.com/63634f4a7b868a399577cf37/642d66f958bac5831704029f_maltipoo.jpg" class="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium eum consequuntur sunt atque amet distinctio earum sapiente at voluptatibus? Repellat facilis nulla beatae maxime natus minima. Illum, doloremque sunt?.</p>
        <a href="#" class="btn btn-primary">Find Out More</a>
    </div>
    </div>
    </div>
    )
};