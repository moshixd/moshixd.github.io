import React, {useState} from 'react';
import { Card, Grid } from "semantic-ui-react";

function Home ({ data }) {
    const [show, setShow] = useState(false)
    const [searchTerm, setSearchTerm ] = useState('')
    return (
        <>
            <section className="order-md-first" >
                <div className="ui search">
                    <div className="ui icon search">
                        <input type={"text"} placeholder={"Search..."} className={"prompt"}
                               onChange={event=> {
                                   setSearchTerm(event.target.value)
                               }}

                        /><i className="search icon"></i>
                    </div>

                    {data.filter((val)=> {
                        if(searchTerm === "") {
                            return val
                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    })
                        .map((people, key)=> {
                            return(<div className={"character"} key={key}>
                                <p>{people.name}</p></div> );
                        })}
                </div>
                <div>
                <h1>People</h1>
                <Grid columns={4}>
                    {data.map((people, i) => {
                        return (
                            <Grid.Column key={i}>
                                {people.name}
                                { show?<>
                                    <Card>
                                        <Card.Content>
                                            <Card.Description>
                                                <strong>Height</strong>
                                                <p>{people.height}</p>
                                                <strong>Mass</strong>
                                                <p>{people.mass}</p>
                                                <strong>Hair Color</strong>
                                                <p>{people.hair_color}</p>
                                                <strong>Skin Color</strong>
                                                <p>{people.skin_color}</p>
                                                <strong>Eye Color</strong>
                                                <p>{people.eye_color}</p>
                                                <strong>birth_year</strong>
                                                <p>{people.birth_year}</p>
                                                <strong>Gender</strong>
                                                <p>{people.gender}</p>
                                                <strong>Homeworld</strong>
                                                <p>{people.homeworld}</p>
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                </>:null
                                }
                                <button className={"button"} onClick={()=>setShow(!show)}>Click for more info!</button>
                            </Grid.Column>
                        );
                    })}
                </Grid>
            </div>
            </section>


        </>
    );
}
export default Home