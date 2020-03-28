<template>
  <div class="history">
    <div class="profile-field">
      <img src="@/assets/graphics/person.svg" alt="" />
      <h2 class="name">{{ name }}</h2>
      <p class="email">{{ email }}</p>
    </div>
    <div class="order-history">
      <h2 class="history-title">Orderhistorik</h2>
      <ul class="history-list">
        <li v-for="item in history" :key="item.orderNumber">
          <div>
            <p class="orderNumber">{{ item.orderNumber }}</p>
            <p>{{ item.timeStamp }}</p>
          </div>
          <div>
            <p>total ordersumma</p>
            <p>{{ item.totalValue }} kr</p>
          </div>
          <hr />
        </li>
      </ul>
      <hr />
      <div class="totalPrice">
        <p class="total">Totalt spenderat</p>
        <p class="price">kr</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "Sixten Kaffelövér",
    email: "sixten.kaffelover@zocom.se",

    history: [
      {
        orderNumber: "#AB1123282323Z",
        timeStamp: 20200303,
        Items: [],
        totalValue: 5555
      },
      {
        orderNumber: "#AB11232823233",
        timeStamp: 20200303,
        Items: [],
        totalValue: 5555
      }
    ]
  })
};
</script>

<style lang="scss">
@import "../scss/main";

.history {
  color: white;
  padding: 0 24px;
  width: 100%;
}

.profile-field {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto 50px auto;

  img {
    width: 94px;
    height: 94px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 28px;
  }

  p {
    color: $gray;
  }
}

.order-history {
  h2 {
    margin-bottom: 5px;
  }

  .history-list {
    & div:nth-of-type(1) {
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      color: $gray;
      margin-top: 10px;

      .orderNumber {
        font-weight: 608;
      }
    }

    & div:nth-of-type(2) {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      margin-bottom: 10px;
      color: $darkgray;
    }

    li {
      list-style: none;
    }

    hr {
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
  }

  hr {
    border: 0.5px solid rgba(255, 255, 255, 0.4);
  }

  & .totalPrice {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    color: $gray;
    font-weight: 608;

    & .total {
    }
  }
}
</style>
