<template>
  <div class="chat">
    <h2 class="text-center">Chat</h2>
    <div class="d-flex justify-center">
      <v-card v-chat-scroll class="messages overflow-y-auto" min-width="800" max-height="600">
        <v-card-text v-for="message in messages" :key="message.id">
          <span class="headline mr-2 teal--text">{{ message.name }}</span>
          <span class="title">
            {{
            message.content
            }}
          </span>
          <span class="d-block text-caption">
            {{
            message.timestamp
            }}
          </span>
        </v-card-text>
        <v-card-text>
          <NewMessage :name="name" />
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import NewMessage from "@/components/NewMessage.vue";
import db from "@/firebase/init";
import moment from "moment";

export default {
  name: "Chat",
  props: ["name"],
  components: {
    NewMessage,
  },
  data() {
    return {
      messages: [],
    };
  },
  created() {
    let ref = db.collection("messages").orderBy("timestamp");

    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format("lll"),
          });
        }
      });
    });
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
/* width */
.messages::-webkit-scrollbar {
  width: 4px;
}

/* Track */
.messages::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.messages::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
.messages::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
