const searchParamsFromFormData = (data) => {
  const searchParams = new URLSearchParams()
  data.forEach((val, key) => searchParams.append(key, val))
  return searchParams.toString()
}

const serialize = (form, options = {}) => {
  const data = new FormData(form)
  const action = new URL(form.action)

  action.search = form.method === 'get' ? searchParamsFromFormData(data).toString() : action.search


  const fetchOptions = Object.assign({}, options, {
    method: form.method,
    body: form.method === 'post' ? data : undefined
  })

  return fetch(action.toString(), fetchOptions)
}

const forms = document.querySelectorAll('form')

forms.forEach(form => serialize(form)
  .then(content => content.json())
  .then(doc => console.log(doc)))
