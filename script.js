
const goto_login = () => {
    window.location.href = "./login.html"
}

// const goto_register = () => {
//     window.location.href = "./register.html"
// }


const login_user = async () => {
    user_mail = document.getElementById("user_name").value
    user_password = document.getElementById("user_password").value
    console.log("submit button clicked")
    console.log(user_mail, user_password)



    let all_users = null
    users_data = await fetch("http://127.0.0.1:5501/data.json")
        .then(data => data.json())
        .then(data => all_users = data)
        .catch(err => console.error("Data noot Fetched", err))

    all_users = await users_data.users
    console.log(all_users)


    let user_exists = false
    for (let element of all_users) {
        if (element.email === user_mail && element.password === user_password) {
            user_exists = true
            alert("User Found")
            window.location.href = "./banner.html"
        } else if (user_exists == false) {
            alert("Username or password wrong")
        }
    }
}




main_div = document.getElementById("maincontainer")
nav_bar = document.createElement("div")
// nav_bar.style.backgroundColor="skyblue"



// div_1
child_div_1 = document.createElement("div")
child_div_1.className = "title1"
image = document.createElement("img")
image.setAttribute("src", "https://media.istockphoto.com/id/1385626588/vector/furniture-logo-vector-illustration-design-emblem-element-badge-simple-logo.jpg?s=612x612&w=0&k=20&c=Fp0DJ2lHJ-XaFQZDKHhSC-t6EBLlcadTN283cq-jSII=")
image.style.height = "80px"
image.style.borderRadius = "10px"

child_div_1.append(image)
child_div_1.style.marginTop = "15px"
child_div_1.style.color = "black"
child_div_1.style.height = "80px"



const arr = ["SHOP ALL", "DECOR", "OFFICE", "LIVING ROOM", "BEDROOM"]
// div_2
child_div_2 = document.createElement("div")
child_div_2.className = "title2"
ul = document.createElement("ul")
arr.forEach(item => {
    const li = document.createElement("button")
    li.innerText = item
    li.style.backgroundColor = "#e2ebeaff"
    li.style.border = "0px solid black"
    li.style.padding = "5px"
    li.style.borderRadius = "7px"
    ul.appendChild(li)
})
child_div_2.append(ul)
child_div_2.style.marginTop = "20px"




//div_3
const arr2 = ["STORY", "CONTACT", "TRACK ORDER", "HELP"]

child_div_3 = document.createElement("div")
child_div_3.className = "title3"
ul = document.createElement("ul")

arr2.forEach(item => {
    const li = document.createElement("button")
    li.innerText = item
    li.style.backgroundColor = "#e1e9e8ff"
    li.style.border = "0px solid black"
    li.style.padding = "5px"
    li.style.borderRadius = "7px"
    ul.appendChild(li)
})
child_div_3.append(ul)
child_div_3.style.marginTop = "20px"
child_div_3.style.paddingRight = "35px"


child_div_4 = document.createElement("div")
child_div_4.className = "title4"
heading_1 = document.createElement("h5")
heading_2 = document.createElement("h1")
heading_3 = document.createElement("h3")
shop_now = document.createElement("button")



heading_1.innerText = "BLACK FRIDAY IN JULY"
heading_2.innerText = "UP TO 50% OFF"
heading_3.innerText = "HUNDREDS OF STYLES AVAILABLE"
shop_now.innerText = "SHOP NOW"
child_div_4.append(heading_1, heading_2, heading_3, shop_now)
child_div_4.style.marginLeft = "65px"
child_div_4.style.marginTop = "100px"
shop_now.style.padding = "12px"
shop_now.style.backgroundColor = "black"
shop_now.style.color = "white"
child_div_4.style.lineHeight = "50px"
heading_2.style.fontSize = "60px"
child_div_4.style.fontStyle = "calibre"




main_div.style.backgroundImage = "url(https://images.unsplash.com/photo-1592549585866-486f41343aaf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070)"
main_div.style.backgroundPositon = "center"
main_div.style.backgroundSize = "cover"
main_div.style.height = "100vh"

main_div.style.borderRadius="15px"

nav_bar.append(child_div_1, child_div_2, child_div_3)



// nav_bar stylings
nav_bar.style.display = "flex"
nav_bar.style.justifyContent = "space-between"
nav_bar.style.paddingLeft = "20px"
nav_bar.style.borderRadius = "20px"
nav_bar.style.marginTop = "30px"



images = ["https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-003.png",
    "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-007.png",
    "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-006.png",
    "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-005.png",
    "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-004.png",
    "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-002.png",
    "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-001.png",
    "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-008.png",
    "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-008.png",
    "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-003.png"
]
console.log(images)

const cards = document.createElement("div")
images.forEach(item => {

    child_card = document.createElement("div")
    pro_img = document.createElement("img")
    pro_img.setAttribute("src", item)

    pro_img.style.height = "135px"
    pro_img.style.width = "15rem"
    pro_img.style.boxShadow = "0px 0px 1px black"
    pro_img.style.borderRadius = "7px"



    child_card.appendChild(pro_img)
    cards.appendChild(pro_img)


})

// card styling
cards.style.display = "flex"
cards.style.flexWrap = "wrap"
cards.style.marginTop = "300px"
cards.style.gap = "30px"
cards.style.justifyContent = "space-around"




// category styling
category = document.createElement("div")
category.className = "category"
child_category = document.createElement("div")
title_1 = document.createElement("h5")
title_1.innerText = "SHOP BY CATEGORY"
title_1.style.color = "gray"
title_2 = document.createElement("h1")
title_2.innerText = "SHOP BY CATEGORY"

title_3 = document.createElement("h2")
title_3.innerText = "_____"
title_3.style.color = "gray"

child_category.append(title_1, title_2, title_3)
category.appendChild(child_category)

category.style.marginTop = "150px"
category.style.textAlign = "center"




furniture_arr = [
    {
        img: "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/cat-1-400x400.jpg",
        name: "BEDROOM",
        products: "6 PRODUCTS"

    },
    {
        img: "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/cat-4-400x400.jpg",
        name: "DECOR",
        products: "9 PRODUCTS"

    },
    {
        img: "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/cat-3-400x400.jpg",
        name: "LIVINGROOM",
        products: "6 PRODUCTS"

    },
    {
        img: "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/cat-2-400x400.jpg",
        name: "OFFICE",
        products: "11 PRODUCTS"

    }
]



furniture = document.createElement("div")
furniture_arr.forEach(product => {

    child_furniture = document.createElement("div")

    image = document.createElement("img")
    image.setAttribute("src", product.img)
    image.style.height = "250px"
    image.style.width = "300px"



    h_5 = document.createElement("h5")
    h_5.innerText = product.name



    p_tag = document.createElement("p")
    p_tag.innerText = product.products


    child_furniture.append(image, h_5, p_tag)
    child_furniture.style.backgroundColor = "#f0f0f0"
    child_furniture.style.boxShadow = "0px 0px 10px gray"
    child_furniture.style.textAlign = "center"

    furniture.appendChild(child_furniture)
})


// furniture stylings

furniture.style.display = "flex"
furniture.style.gap = "20px"
furniture.style.justifyContent = "space-around"




// featured products styling
featured = document.createElement("div")
products = document.createElement("div")

heading1 = document.createElement("h5")
heading1.innerText = "SHOP BY CATEGORY"
heading1.style.color = "gray"


heading2 = document.createElement("h1")
heading2.innerText = "FEATURED PRODUCTS"
heading2.style.fontSize = "40px"



heading3 = document.createElement("h2")
heading3.innerText = "_____"
heading3.style.color = "gray"

products.style.textAlign = "center"
products.style.marginTop = "150px"

products.append(heading1, heading2, heading3)
featured.appendChild(products)





product_names = [
    {
        img: "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-09-b-400x488.jpg",
        name: "Product Name 1",
        price: "$95.00"
    },
    {
        img: "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-05-b-400x488.jpg",
        name: "Product Name 2",
        price: "$85.00-$99.00"
    },
    {
        img: "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-01-c-400x488.jpg",
        name: "Product Name 3",
        price: "$80.00-$90.00"
    },
    {
        img: "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-04-c-400x488.jpg",
        name: "Product Name 4",
        price: "$85.00-$95.00"
    },
    {
        img: "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-15-b-400x488.jpg",
        name: "Product Name 5",
        price: "$85.00-$99.00"
    },
    {
        img: "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-16-a-400x488.jpg",
        name: "Product Name 6",
        price: "$75.00-$90.00"
    }
]

productnames_div = document.createElement("div")
product_names.forEach(item => {

    product_cards = document.createElement("div")

    card_img = document.createElement("img")
    card_img.setAttribute("src", item.img)
    card_img.style.height = "600px"
    card_img.style.width = "480px"

    card_name = document.createElement("h3")
    card_name.innerText = item.name
    // card_name.style.

    card_price = document.createElement("h5")
    card_price.innerText = item.price

    product_cards.style.boxShadow = "0px 0px 3px"
    product_cards.append(card_img, card_name, card_price)
    productnames_div.appendChild(product_cards)
    product_cards.style.backgroundColor = "#f0f0f0"
    product_cards.style.textAlign = "center"


})

productnames_div.style.display = "flex"
productnames_div.style.flexWrap = "wrap"
productnames_div.style.justifyContent = "space-around"
productnames_div.style.gap = "20px"





new_arrivals = document.createElement("div")
new_card = document.createElement("div")
heading_h1 = document.createElement("h5")
heading_h2 = document.createElement("h1")
heading_h3 = document.createElement("h1")
heading_h4 = document.createElement("h3")

heading_h1.innerText = "NEW ARRIVALS"
heading_h2.innerText = "BRAND NEW, MODERN LAMPS"
heading_h3.innerText = "COLLECTION"
heading_h4.innerText = "IDEAL FOR OFFICES, BEDROOMS AND ALL IN BETWEEN."

new_div = document.createElement("div")
new_div.style.textAlign = "center"
new_image = document.createElement("img")
new_name = document.createElement("h2")
new_price = document.createElement("h5")
new_price.style.color = "gray"



new_image.setAttribute("src", "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/lamp-001.png")
new_name.innerText = "STUDY LIGHT"
new_price.innerText = "$85.00 - $99.00"

new_div.append(new_image, new_name, new_price)
new_card.append(heading_h1, heading_h2, heading_h3, heading_h4)
new_arrivals.appendChild(new_card)
new_arrivals.appendChild(new_div)

new_arrivals.style.display = "flex"
new_arrivals.style.justifyContent = "space-between"
new_arrivals.style.marginTop = "30px"


new_card.style.textAlign = "center"
new_card.style.alignContent = "center"
new_card.style.backgroundImage = "url(https://surfboardhoard.com/wp-content/uploads/2024/07/bg-01_2.webp)"
new_card.style.backgroundPositon = "center"
new_card.style.backgroundSize = "cover"
new_card.style.width = "1000px"
new_card.style.height = "700px"
new_card.style.color = "white"
new_card.style.fontFamily = "'Arial Black', sans-serif"


new_div.style.marginRight = "120px"
new_div.style.marginTop = "120px"



rating_div = document.createElement("div")
rating_card1 = document.createElement("div")
rating_card2 = document.createElement("div")
rating_card3 = document.createElement("div")



star1 = document.createElement("span")
star1.innerText = "⭐⭐⭐⭐⭐"
star2 = document.createElement("section")
star2.innerText = "Lorem ipsum dolor sit amet,"
star3 = document.createElement("section")
star3.innerText = "consectetur adipiscing elit. Ut elit"
star4 = document.createElement("section")
star4.innerText = "tellus, luctus nec ullamcorper mattis."


star_1 = document.createElement("span")
star_1.innerText = "⭐⭐⭐⭐⭐"
star_2 = document.createElement("section")
star_2.innerText = "Cras vel pellentesque odio, in"
star_3 = document.createElement("section")
star_3.innerText = "vestibulum dolor. In commodo ligula"
star_4 = document.createElement("section")
star_4.innerText = "massa, tristique fermentum enim"
star_5 = document.createElement("section")
star_5.innerText = "hendrerit faucibus. Etiam facilisis justo"
star_6 = document.createElement("section")
star_6.innerText = "sed tortor vehicula mollis. Duis vel"
star_7 = document.createElement("section")
star_7.innerText = "vehicula diam."

star__1 = document.createElement("span")
star__1.innerText = "⭐⭐⭐⭐⭐"
star__2 = document.createElement("section")
star__2.innerText = "Morbi in leo viverra, elementum risus"
star__3 = document.createElement("section")
star__3.innerText = "vitae, commodo lorem. Quisque a"
star__4 = document.createElement("section")
star__4.innerText = "mollis."

rating_card1.append(star1, star2, star3, star4)
rating_card2.append(star_1, star_2, star_3, star_4, star_5, star_6, star_7)
rating_card3.append(star__1, star__2, star__3, star__4)
rating_div.appendChild(rating_card1)
rating_div.appendChild(rating_card2)
rating_div.appendChild(rating_card3)

rating_div.style.marginTop = "50px"
rating_div.style.display = "flex"
rating_div.style.justifyContent = "space-between"


rating_card1.style.height = "400px"
rating_card1.style.width = "450px"
rating_card1.style.alignContent = "center"
rating_card1.style.textAlign = "center"
rating_card1.style.fontFamily = "'Arial Black', sans-serif"
rating_card1.style.backgroundColor = "#f0f0f0"


rating_card2.style.height = "400px"
rating_card2.style.width = "450px"
rating_card2.style.alignContent = "center"
rating_card2.style.textAlign = "center"
rating_card2.style.fontFamily = "'Arial Black', sans-serif"
rating_card2.style.backgroundColor = "#f0f0f0"


rating_card3.style.height = "400px"
rating_card3.style.width = "450px"
rating_card3.style.alignContent = "center"
rating_card3.style.textAlign = "center"
rating_card3.style.fontFamily = "'Arial Black', sans-serif"
rating_card3.style.backgroundColor = "#f0f0f0"




best_products = document.createElement("div")
best__products_data = document.createElement("div")

product_1 = document.createElement("h6")
product_1.style.color = "gray"
product_2 = document.createElement("h1")
product_2.style.fontSize = "40px"
product_3 = document.createElement("h2")
product_3.style.color = "gray"

product_1.innerText = "BEST PRODUCTS"
product_2.innerText = "WHY CHOOSE US"
product_3.innerText = "______"


best__products_data.append(product_1, product_2, product_3)
best_products.appendChild(best__products_data)


best__products_data.style.textAlign = "center"
best__products_data.style.marginTop = "150px"




delivery = [
    {
        img: "https://cdn-icons-png.flaticon.com/128/9561/9561688.png",
        name: "FAST DELIVERY",
        p1: "Lorem ipsum dolor sit amet, consectetur",
        p2: "adipiscing elit. Ut elit tellus, luctus nec."
    },
    {
        img: "https://cdn-icons-png.flaticon.com/128/18551/18551254.png",
        name: "FREE SHIPPING",
        p1: "Lorem ipsum dolor sit amet, consectetur",
        p2: "adipiscing elit. Ut elit tellus, luctus nec."
    },
    {
        img: "https://cdn-icons-png.flaticon.com/128/13547/13547231.png",
        name: "SECURE CHECKOUT",
        p1: "Lorem ipsum dolor sit amet, consectetur",
        p2: "adipiscing elit. Ut elit tellus, luctus nec."
    },
    {
        img: "https://cdn-icons-png.flaticon.com/128/11153/11153403.png",
        name: "EASY RETURNS",
        p1: "Lorem ipsum dolor sit amet, consectetur",
        p2: "adipiscing elit. Ut elit tellus, luctus nec."
    }
]


delivery_returns = document.createElement("div")


delivery.forEach(item => {
    delivery_details = document.createElement("div")

    image = document.createElement("img")
    image.style.height = "50px"
    pro_name = document.createElement("h2")
    pro_text1 = document.createElement("section")
    pro_text1.style.color = "gray"
    pro_text2 = document.createElement("section")
    pro_text2.style.color = "gray"


    image.setAttribute("src", item.img)
    pro_name.innerText = item.name
    pro_text1.innerText = item.p1
    pro_text2.innerText = item.p2

    delivery_details.append(image, pro_name, pro_text1, pro_text2)
    delivery_returns.appendChild(delivery_details)
    delivery_details.style.backgroundColor = "#f0f0f0"
    delivery_details.style.height = "180px"
    delivery_details.style.width = "330px"
    delivery_details.style.paddingTop = "20px"
    delivery_details.style.borderRadius = "20px"

})


delivery_returns.style.display = "flex"
delivery_returns.style.justifyContent = "space-evenly"
delivery_returns.style.textAlign = "center"
delivery_returns.style.marginTop = "60px"







footer = document.getElementById("footer")
main_footer = document.createElement("div")




// furniture shop
footer_card1 = document.createElement("div")

image = document.createElement("img")
image.setAttribute("src", "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-regular.png")

footer_card1.append(image)


// links 
footer_card2 = document.createElement("div")

card2_heading = document.createElement("h2")
card2_heading.innerText = "LINKS"

links_data = ["Shop", "Contact", "Track order", "Help"]

links_data.forEach(data => {
    h5 = document.createElement("h4")
    h5.innerText = data
    h5.style.color = "gray"
    footer_card2.appendChild(h5)

})
footer_card2.prepend(card2_heading)


// categories section
footer_card3 = document.createElement("div")

card3_heading = document.createElement("h2")
card3_heading.innerText = "CATEGORIES"

category_data = ["Bedroom", "Decor", "Living Room", "Office"]

category_data.forEach(data => {
    h5 = document.createElement("h4")
    h5.innerText = data
    h5.style.color = "gray"
    footer_card3.appendChild(h5)

})
footer_card3.prepend(card3_heading)


// subscribe section

footer_card4 = document.createElement("div")


card4_heading = document.createElement("h2")
card4_heading.innerText = "SUBSCRIBE"

input = document.createElement("input")
input.type = "email"
input.placeholder = "enter your email address..."
input.style.padding = "10px"
input.style.paddingRight = "150px"

btn = document.createElement("button")
btn.innerText = "SUBSCRIBE"
btn.style.width = "100px"
btn.style.paddingTop = "14px"
btn.style.paddingBottom = "12px"
btn.style.paddingRight = "30px"
btn.style.backgroundColor = "black"
btn.style.color = "white"




footer_card4.style.display = "flex"
footer_card4.style.flexDirection = "column"
footer_card4.style.gap = "20px"
footer_card4.append(card4_heading, input, btn)


main_footer.style.display = "flex"
main_footer.style.justifyContent = "space-around"
main_footer.style.marginTop = "100px"
main_footer.style.backgroundColor = "#f0f0f0"
main_footer.style.height = "50vh"
main_footer.style.paddingTop = "50px"


main_footer.append(footer_card1, footer_card2, footer_card3, footer_card4)
footer.appendChild(main_footer)




end_footer = document.createElement("div")

end_card1 = document.createElement("div")
end_heading1 = document.createElement("h4")
end_heading1.style.color = "gray"
end_heading1.style.paddingLeft = "50px"
end_heading1.innerText = "Copyright © 2025 Furniture Shop | Powered by Furniture Shop"

end_card1.append(end_heading1)


end_card2 = document.createElement("div")
img_1 = document.createElement("img")
img_1.setAttribute("src", "https://cdn-icons-png.flaticon.com/128/15047/15047435.png")
img_1.style.height = "30px"
img_2 = document.createElement("img")
img_2.setAttribute("src", "https://cdn-icons-png.flaticon.com/128/15707/15707749.png")
img_2.style.height = "30px"
img_3 = document.createElement("img")
img_3.setAttribute("src", "https://cdn-icons-png.flaticon.com/128/5968/5968852.png")
img_3.style.height = "30px"
img_4 = document.createElement("img")
img_4.setAttribute("src", "https://cdn-icons-png.flaticon.com/128/3670/3670151.png")
img_4.style.height = "30px"
img_5 = document.createElement("img")
img_5.setAttribute("src", "https://cdn-icons-png.flaticon.com/128/5968/5968841.png")
img_5.style.height = "30px"

end_card2.append(img_1, img_2, img_3, img_4, img_5)


end_card2.style.display = "flex"
end_card2.style.gap = "10px"
end_card2.style.paddingRight = "30px"

end_footer.style.display = "flex"
end_footer.style.justifyContent = "space-between"
end_footer.style.alignItems = "center"
end_footer.style.backgroundColor = "#f0f0f0"
end_footer.style.boxShadow = "0px 0px 0.5px black"
end_footer.style.height = "100px"



end_footer.appendChild(end_card1)
end_footer.append(end_card2)





main_div.append(nav_bar, child_div_4)
main_div.appendChild(cards)
main_div.appendChild(category)
main_div.appendChild(furniture)
main_div.appendChild(featured)
main_div.appendChild(productnames_div)
main_div.appendChild(new_arrivals)
main_div.appendChild(rating_div)
main_div.appendChild(best_products)
main_div.appendChild(delivery_returns)
main_div.appendChild(footer)
main_div.appendChild(end_footer)

