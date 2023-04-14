const Tag = ({tag,onChangeSelectedCategory}) =>{
    return (
        <div className="tag" onClick={()=>onChangeSelectedCategory(tag.name)} >{tag.name}</div>
    )
}

export default Tag 