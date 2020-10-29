import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css'; 
const TinderCards = () => {
    const [people, setPeople] = useState([{
        name: 'Harvey Specter',
        url: 'https://i.pinimg.com/736x/09/b1/5a/09b15a8627b93106f125325b112bdb26.jpg'
    },
    {
        name: 'Ross Geller',
        url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEhIQEBAQEBUVEBUXFRUQFRUXFxUXFRUWFhUWFRUYHSggGBolGxUVITEhJSkrLy4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0iICUtKy0rLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgAFAwQGBwj/xAA+EAACAQIEAwUFBQYFBQAAAAAAAQIDEQQFEiExQVEGE2FxgSIykaGxI0LB0eEHFFJicvA0Q4KywjNzkuLx/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECBAUDBv/EACYRAAICAQQCAgMAAwAAAAAAAAABAgMRBBIhMTJBEyJRYZEFcaH/2gAMAwEAAhEDEQA/AOBCQKRrmOFEQUEYiIKIhgACCRIawxEIgoKQAKwSlYx4vFQpq8n6c2UOYZpOWyWhfW/j0OVl0YHWqmU/9HQSnbcwrG0+GtLzOYljKmylKfDbd8OQsNb91OXglf8Atld6p+kWVpF7Z2EZ34MNzkqWLqQf3l4foWmFzm+016r8UdYaiL7OM9NJdcl1clzXp4qEuEkzPGVzupJnBxa7GIREJEQAGsQAEAOLYQxQMaxGhDMbAx2KwAFiDAEMDQUEKGIgUiJDIAAMkQKQxEQxEg2GIBqYrMIQ21JvoJm1XTH3lH5t/oVGGwveXai5WfW3w6lS7UbOEWqdPu5Ya+NhLea1b8nuv0LNyw9WlGMYalG7Ts1JcNS+O/k2HDZdRULuW6dndNpeEo80V+KwKUvsvZ4WV+EntsuV/UznLczRUdq4N2p3ShFVIQlTfu3un1tGa3i0uTNLE4ehZ9y5xW2zfXq/Q244qEYunLVCd1rhNLS237S0vg0aOMw8FO6lojfZx3Vn4fgJDaKutFr0MNywxWHinbXK1tnJbP1VzRkiaEZKWKlG3gW2EzVXtUck+qSt62KO+4yd/MnGbj0QlXGXZ21KpqV+HnsZTlsuxstUdT1W/i5dbHT0pJpNGhTbvRm3VbGMFkIdziK0AawGACMgwthDFsLYdoViGQg9yCGJYKIFDERDJAQyGIIUBDIYiIx4mppjfmZUauZW03avyRCbxFslBZkkUuItUeuo5W5X3+RkoYOFS3d14xa5X0+Stcw4ul7Otzb5WtsvXh6I1KF73vZdX+CMeTy8mxFYWC8w8arTmowxChtUpv3kvC27TXmMqlGdpRils13WJTcb9I1V/tkkbGFderGChTndbKasrp9Y33R1GWdhatf26kWrre7smvTn5nGU0uzvGpyOLxijXV9UZctM764eUrvWvHoa0sJqheN04q1r3T8r8H4HsEP2a4fndNrhF8H5mtL9mmm8lVa/vn1IfMjp8J4y6Lfs+1e+ys/UarhNKV0+vLr0Pbl2Hg4RTlaSd7rZ/Eps7/Z9UlvTnF+D2BalA9P+GeO16dnfxGlSS3TumuX9+fwOpz3spWor2lz5HN0Y2ema4v8AQsRkpdFeUHHslOg9dr2fJ+J02W1NUed1xva/yKadDXBTjxj7LfVx3T+DN7I6iblbnZrw4posaaWJlXUxzDJcECQ1DLAAZigAoGMBgMQDGYrEMbSQlyCGIFEChiChgIKAQUFEQUhiGSKzOV7PG39/QtEVmfJ92v6kvM5XeDOlHmio7pd3urO/1+i4v4Fx2OytYitp42XFmjjJx2jHmorbwST9djoew1eMKm2/LYxLH9WbtSW5Ho+VZZSw9tMU3/Ey/o12VtD2kn4G5S8TMcnk0tqLSDug1J+JqUpmSW5PPBy28iORq4qT6meoadaZzkzpFclJnOE76LTXJ/Rr8TyzNcn0SnJ7b7eSXE9nnDY4DtnRteSR3pm08ELoJxOPhSjDvF16/dbirNfE18r9mol11LzsNGe7vvq4/FcgKVqtO38W/q0vzNOl4mjKuWYNF9EIIjG0YgBWMwAAorHFYDFYrHYthDGsQgAGIMgBQAMgoCGQxBQyAgoBDJGnm8L034NM3EY8dG9Of9Lfw3IzWYsdbxJM5OpWfW20rJcup0XYejJyTS4fI5qrSvKdnsle3nxO77A04qg5P+KV35WMG7xPQ0cyPR8HUtTTbNuOKprjOK82jzFZrjsdV0YWLjSUmk+CaXOTM2J7H1NnVxjlNu7SWq3hFcuRS+JJ/Zl75M9I9Nw+Z4WT0xrwlK/BMsEeedn8sw1H2W5SfWTO3wta62INpPgk4PHJuV3GKbk0rFLicxw8f8yN1ybVwZ3WWhqTtfbY8/zHKMPVervO5jznUnGMfnuwSUmGHFZO1qZ1hre+UOeUoVovS1JNXTW/EoY5DhG3COLu1s1SlF224uEkn8EaCyzEYKanTqOtSvul0fFnaMIp8M5ym8dHM4jVSnKL2cX8Xf6WD3r10lzcoeuqX6Mt+2WGXsVUrKpG1/FO+/pc0OzWXvESdSW0abtG/Bye6Xi+fqXq5Lhsz7IPLii9iFB0tNp7WZDdRgMDAMxQAVgYzAxDEYBmKwGEg2xBDMYRRgAZBQEFDEMFACgIjolRXjJdYtfIiCMRy2Mw0qTvKLWummnvvez4nX9j8O5YGai7N1JK/HZtIv8AEZJTxlHDq2qM4KLS5Siuq8vkaPYa0KMqb20V5xd+sZW/A83bLte0eorrw4tdNFpKi8DhrwW0Yrhs/TxK7GPMIunODnoq0ZWjh76o1JJ2U5q7dnpe9rnbVcJGrFX3VjLgstin934ehUjZh5Lco8YyUmCyOfd0FKrOtVcPtU1fTe72nyfDbdF1lVKVOThJ6rcH1XJlnOkkrK3oail7aI2PLHDrBoZ/hu8lGD2Tkr+RpY7s9Sq0qtGrThPvLWnvqp6WmlHkltw59S4zu14y6mbCT1RbFGW1jlzBZOGh2VUVX1fazq2vUezilw0pX32W9+SLLLcpdOkoTevSrXa3fmdPVkuiNOtLZjlY2Ea16R5326oxWGkkvdlFryvY2eyeVKP7ttZTtJJ9XpvJ+LMPaxaqdVcdv+R0eDrRpYKlWdtVJRSW2942XzSLHLioo4xxGbk/RzGfQSxNZLgp/grmiPVqOcpTk7uTbb8WIz08I7YqL9I8nZLdNyXtsAGEDJERWKxmKIYBWMxWAxiBsQQzGEUYAGQUKhkMQwUBBQCHQRUMhkTqeweLtVdKUrLTKcU/4lZO3o7mvV+zxVdLhOfeL1tq+aZSYTEd1ONTdaZXunZpcG0zpe0NKnGVGtBSWtaZJ9bXv9TC19e27d+Ueg/x1m6jb7i/+HSZTiVKCLNM5vKqltupfUnwMh94NeS4ybaexUd8u8S4e00WrexQYjTGc7vdVL/R7egMK/Za5rT1U0+NtyuyPF3bg+P1LmNanOna+5yixVOGKVKMlfVe3NJp39B4BdYZ1NSFytxkHZm3UxGjdtWNHHYpWvdMgyUEziM6lZSM2awUKNOmm7aYtJ85Ne02/D8TUz2qpOO+zkvhfcOb4uNRxUXdRRr6OtysjxwuTK1tqhXPnvj+lciMIGb55sUDCKwGBisZiiGgMVjMVgMcgACGIFACgAZDIRDIYh0FCoICHQRUEZEM43TT4NNfENLtRelHBYiE3UjOKhVVmnZ7aufDYiMNfDQlaUoptcHzRW1VCtj+0W9JqHVLH5O3yateKfM6PD1lscLkWJs9DfS3idTgazbseXthiR6qqe6OGXsai5/ApO0GXwrPvFe/ns/1MNXMO6v3qcbv3mnp8FdcDNHFUrXnXpRXVyXASRJcFRiMNiIJaJtR4JSvdXJhcqdF99L26j96T4st8TnOAk4xliobO+z2e3UrMw7UUppxw1CriEttdtMP/KXFeRPHALLNnE5io2lK1lbjz9DBCk5wqz3jG+ylta66Fflir16qnXjCnGnaSpwu9/uuTfF+BvZ/mShScFxvuyO3nCByxyzk8ympTil92P6GG5gpy1Xl1ZlR6nS17KkjyOss+S1sa4oQFgrEFYWAQwMULAwGKxWMxWAxgDkEMwhQCIAHQwgwCGQwiGQxDIYVDIYgojQUioznOHSvCmk5dXwXkupGclFZZKuDnLCL+KeiNSHGK3XVF5lObp2afmauTUb0o34uKv523K3GUJYebnFPS+K6eK8DzE8SbR6uGYxUv6ejd8qkeCd1w4/E52vk2G1X7qlFvrFWY2TZkpRVmXiw8Ki9q1iu00yzCaNWlhsHGNpUMOvSNvM1MzzSnL7OilUfKEOF/FrkW1Hs5hpu8oSl4OTt8EbE8DSoR+zpxgv5USy8D+TD4KfAYZ0YNyd5P2pPrJ/lwOH7SY1uUo33udjnGOUIyk3sotnnSvVlKb53OtS5yytdLPCNvCwtGP8ASjMLBbLyGPUxWIo8jN5kwACxWMQGBkYoiRGBhYrAYGKwisQzJcgCABjIgBEMZBTFQyGIZDIRDoYh0OhYoyRQ0QZJSUU29kld+hyuDq06lWM611HvdT+dvw+Bv55j226MeC959X08iq0+hnauxSe1GjpK3BbmetZfFPS47p81wafBo2swy/Ur2PPuyXaL92kqdZ3pN8d/s/Ffy+B69QjGcIyjJSjKN01ummYVsZQkehqsjOPB5zWwlTDy10vWL4O/HyLnK+0EZLS3oktnGX4MuMxy7w+ByuZZXZ3Wz/vmG5S7Hsa6OzwucRS4mHM87iou8klbyOBlGpHhKfozDocuN35hhCyzPnWZd+9EL6b7vr5eBr4WjeLGnStyLXLsN7HDqdVI5OOWyqpTUknFpprihjlMgzPunol7jfP7r6o6yMk900/Jo9LVapxyeYuqcJAFY7iI0dDiKxRmIxEgMDCxWIYGAjAAzIQW5BDMbChQoAGQwgyGIdGSJjRlgMix4mR1IwTlJ2SV2wU4nO55mHeS7uL9iL3/AJpfkQtsVcckqq3ZLBqVqinOVSN7Sk2r+PAjVzDTdnZ8H8mZrvgZDeXk10scCSR1nYjtjLAyVGu3LDt7c3SbfvL+XjdHKtEa5EJQUlhk4TcXlH0NOMKkdUWpRaunF7NcmnzRS43B8VszzrsT2ulgJKjVbeHbe+7dJvmv5HzXqequrGok007q6aezT4NGbbW4M1abVNHG47CeFjTp4c6rHYcqe6tISZ1aKx4MsayVGlKXSEn8EbuHwybMHaWOmjOPVW+I1LkjJcM8ZwsTNU1R3i2vJm3meC/d5q3uyjqj8bMxWvy+Bqxl7RjSWHhiYbNK0OE5eT3XzLzBZ7Gdo1FpfVcDn50t7oCR3hfOPs4WUQn6O0b5rfyEZz2XZi6TUZbwfy8UdBe+5frtVi4M+yp1vDAxWFismRAwMjAxDGIC5AGIQW4UIDIhoiRHQxGSJmgjFAx5jj1h4dZy91fi/AbkorLIqLk8I18/zHu13UH7cvea+6ung3+JzyqW3+H5hd29U22292+LYstzLttdksmrVWq44RGzPCd14/VGKHAeP/z8jkdByAvz/vyGEAGrnS9kO1DwrVCvK9Fy9mbb+yb/AOF/gc0CSIzipLDJwscHlHtc690ntJNXUk7pp80+a8SvxS3ucF2a7T1MHanNSrUP4FbVDe94N/Ru3keg4edPEQVShNVIPmuTXFPozPnU4P8ARp1Xxmv2ZctrK5jz+l3m3ivoDB03CaTLDNKKSUlY5+zthHBdtsqX7vGtwdNxj5qbt9bHFxi1bc9a7SYT94wlWlHi4qUfOElJfHTb1PJUy/p5ZjgzNVHEyOW+m3ryElGyuPcwYqdmkWCsM1dFxkWKunTfGO6v06fMpoyHo1XCSkuR1qnslk52w3xwdQxWSMlJJrg1sRmmZYrFbGbEbAY5AXAIYlwoS4yADIjJExxMkdt3suYxEr4mNKLnL0XV9DnK1Zzk6k+L+nJIfH4p1ZX+6tkvxNZ7mffbveF0X6Ktiy+yNt8RlEljJFFcsAihkGxGhAK/78xkKww39OP4MAImGTSV27JGKVaMeLu+hqzc6r6Ll0AA1sY3tHZfM2cspSmpOMnGyu97XfJbGCnh7Aq6lfS3G/FJtJ26jwMvuyeLVHFU5LhUfdyb/ntpv/qt8z1StidUFHmnueE0cRKPXz5q3BpnofZHtKq9sPWdqiXszb/6n/tb4lXUVN/ZFzS2pfVndxjseO55he5xNen0qya8pNyX1PW8LVttx3/D9Dgv2i4ZQxFOql/1Ke78YOz+TRy0zxLB11ccwycnzNCtLVJ29Ddry0xb9EaNCF9y+jONiERmrjpWA0MRb5LX1QcXxT+T/U32UGW1dNWPSWz9V+di+bNGieYGdqIbZgYjYWxLnU5DkBcghmMZMRMZMAZliaOb4r/Kj/q/I2a9dU4OXPhFeJQyk+L3b4sr6izC2o76evL3MBIIBkiUi8Mh2CwbEQJchAXAAsxzh0bXl9DIAAMccPBcl5syEtzIAA4iTjfZjNEADVq0THTlpa3as7xa4pm4/Ew1aVxhk9J7L9oP3qm1NpVYL2l/ErbTXg/kL20pfvGE73nRmpf6XtL6HnGAxlTD1I1Ie9Ftq/DdNNeqbPS+zOZUMbSq027a6emcHxjrWnbqipOvZLcui9C35IbH2ea42V4L+r8yYeNh8yw8qUp0pcYVLP0uvy+IafAtlJ8cDMWTGMcgEBu265bnRQq6oqXVXOcLfLal4W6OxZ00vtgraiOYpm22KRsBdKg5BbkFkCDxIQAZo51wp/1P6FZPi/MhClf5l3T+CD0MqIQ4HcYLIQQE/IDIQAJ0JIhAAIkeLIQACwfmQgASYHwIQYGpWLzsB/jIf0MhDnZ4s61eSF7a/wCNxX/cj/tgVlHggkJQ8UQn3/R+hjqcSEJERC0yn3Zf1fgQh20/mcb/AAN4CAQvFIYhCCA//9k='
    }
    ]);
    const swiped=(directoin, nameToDelete)=>{
        console.log(nameToDelete + " got deleted");
    }
    const outOfFrame=(name)=>{
        console.log(name + " out of the screen");
    }
    return (
        <div className="tindercards">
            <div className="tinderCards__cardContainer">
                {people.map((person)=>{
                    return (
                        <TinderCard className="swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir)=>swiped(dir,person.name)}
                        onCardLeftScreen={()=>outOfFrame(person.name)}
                        >
                        <div style={{backgroundImage: `url(${person.url})`}}
                        className="card">
                            <h3 style={{color: "white"}}>{person.name}</h3>
                        </div>
                        </TinderCard>
                    )
                })}
            </div>
        </div>
    );
}

export default TinderCards;
