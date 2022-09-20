<script setup lang="ts">
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const getData = () => fetch('/api/hello')
  .then(response => response.json())
  .then((data) => {
    console.error('remote count ', 1)
  })
</script>

<template>
  <div>
    <ui-textfield v-model="name" fullwidth placeholder="Subject" maxlength="40" with-counter />
    <ui-button class="block mt-4" outlined @click="getData">
      get data from remote!
    </ui-button>
    <ui-button class="block mt-4" outlined @click="go">
      go to page /hi/?
    </ui-button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
