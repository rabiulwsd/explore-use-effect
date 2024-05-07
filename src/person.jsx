export default function Person({data}){
    return(
        <div className="box">
            <h4>NAme: {data.name}</h4>
            <h4>Email: {data.email
            }</h4>
        </div>
    )
}