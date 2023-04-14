import { useEffect, useState } from "react"
import Product from "../Components/Product";
import Tag from "../Components/Tag";

const Main = () =>{

const [tags,setTags] = useState([]);

const [selectedCategory, setSelectedCategory] = useState("none")

const [prod,setProd] = useState([]);

const onChangeSelectedCategory = (type) => {
    setSelectedCategory(type);
    console.log();
  };

 

const [query,setQuery] = useState('');

const onChangeQuery =(e) =>{
    setQuery(e.target.value.toLowerCase());
    console.log(query);
}

const searchProd = prod.filter((item)=>item.name.toLowerCase().includes(query))

const fetchProd =  async () =>{
    const r = await fetch('https://api.avavion.ru/api/products');

    const data = await r.json();

    setProd(data.data);
}

const fetchTags =  async () =>{
    const r = await fetch('https://api.avavion.ru/api/tags');

    const data = await r.json();

    setTags(data.data);
}
const initialState = prod;
useEffect(()=>{
fetchTags()
fetchProd()
},[])

useEffect(() => {
    setProd((prev) => {
        
      prev = [...prev];

      prev = searchProd.filter((product) => product.tag == selectedCategory);
      if (selectedCategory === "none") {
        prev = searchProd;
      }
      return prev;
    });
  }, [selectedCategory]);



return (
    <div className="main">

        <div className="search">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" onChange={(e)=>onChangeQuery(e)} />
        </div>
        <div className="tags">
            {tags.map((tag)=>{
                return <Tag key={tag.id} tag={tag}  onChangeSelectedCategory={onChangeSelectedCategory}  />
            })}
        </div>

        <div className="products">

            {
                searchProd.length ? (
                searchProd.map((prod)=>{
                    return <Product key={prod.id} prod={prod} />
                })
                ) : (
                    <h2>По вашему запросу ничего не найдено</h2>
                )
            }
         
        </div>
    </div>
)
}

export default Main