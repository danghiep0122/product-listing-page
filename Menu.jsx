import CommonLayout from '../../layouts/commonLayout/CommonLayout'
import allPizza from '../../data/allPizza.json'
import ItemCard from '../../layouts/components/ItemCard'
import { useState } from 'react'

const allPremiumPizza = allPizza.filter((x) => x.tag === 'premium')
const allFavoritePizza = allPizza.filter((x) => x.tag === 'favorite')
const allSignaturePizza = allPizza.filter((x) => x.tag === 'signature')

function Menu() {
  const [category, setCategory] = useState('')

  let premiumCategoryPizza
  category === 'all'
    ? (premiumCategoryPizza = allPremiumPizza)
    : (premiumCategoryPizza = allPremiumPizza.filter((x) =>
        x.category.find((x) => x === `${category}`)
      ))

  let favoriteCategoryPizza
  category === 'all'
    ? (favoriteCategoryPizza = allFavoritePizza)
    : (favoriteCategoryPizza = allFavoritePizza.filter((x) =>
        x.category.find((x) => x === `${category}`)
      ))

  let signatureCategoryPizza
  category === 'all'
    ? (signatureCategoryPizza = allSignaturePizza)
    : (signatureCategoryPizza = allSignaturePizza.filter((x) =>
        x.category.find((x) => x === `${category}`)
      ))

  return (
    <CommonLayout>
      <h1>Menu Page</h1>
      <h1>Menu Page</h1>
      <h1>Menu Page</h1>
      <div style={{ backgroundColor: '#f2f4f8' }}>
        <button
          onClick={() => {
            setCategory('pork')
          }}
        >
          🐷
        </button>
        <button
          onClick={() => {
            setCategory('beef')
          }}
        >
          🐮
        </button>
        <button
          onClick={() => {
            setCategory('vegan')
          }}
        >
          🍄
        </button>
        <button
          onClick={() => {
            setCategory('all')
          }}
        >
          🍕
        </button>
        <hr />
        <section
          style={premiumCategoryPizza.length === 0 ? { display: 'none' } : {}}
        >
          <h2 style={{ textAlign: 'center' }}>⭐ Premium Pizza ⭐</h2>
          {category !== 'all' ? (
            <ItemCard data={premiumCategoryPizza} />
          ) : (
            <ItemCard data={allPremiumPizza} />
          )}
          <hr />
        </section>
        <section
          style={favoriteCategoryPizza.length === 0 ? { display: 'none' } : {}}
        >
          <h2 style={{ textAlign: 'center' }}>⭐ Favorite Pizza ⭐</h2>
          <ItemCard
            data={category ? favoriteCategoryPizza : allFavoritePizza}
          />
          <hr />
        </section>
        <section
          style={signatureCategoryPizza.length === 0 ? { display: 'none' } : {}}
        >
          <h2 style={{ textAlign: 'center' }}>⭐ Signature Pizza ⭐</h2>
          <ItemCard
            data={category ? signatureCategoryPizza : allSignaturePizza}
          />
        </section>
      </div>
    </CommonLayout>
  )
}

export default Menu
