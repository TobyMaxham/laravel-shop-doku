---
title: Brand
---

# Brand

A Brand is ...

Some of the attributes will have an object value.

| Name | Type | Description |
|-------|-----|------|
| id | integer | A unique identifier for each Brand. This is automatically generated upon creation. |
| name | string | The name of the Brand. |
| caption | string | A caption of the Brand. |
| slug | string | An automatically generated slug for the Bran. |
| created_at | string | A date and time combined value that represents when the Brand was created. |
| updated_at | string | A date and time combined value that represents when the Brand was updated. |


## Create Brand

To create a new Brand, send a POST request to `/api/v1/brand`.

The attribute values that must be set to successfully create a Brand are:

| Name | Type | Description | Required |
|-------|-----|------|------|
| name | string | The name of the Brand. | true |
| caption | string | A caption of the Brand. | |


### cURL Example
```ssh
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer Mw7M0jUqO3cdJug4YAMTrXwgPqufWgfc" -d '{"name":"Foo Brand", "caption":"A Brand of Bar"}' "https://shopmakerz.de/api/v1/brand"
```

### Request Body
```json
{
  "name": "Foo Brand",
  "caption": "A Brand of Bar"
}
```

### Response Body
```json
{
  "brand": {
    "name": "Foo Brand",
    "caption": "A Brand of Bar",
    "slug": "foo-brand",
    "updated_at": "2018-08-05 22:06:43",
    "created_at": "2018-08-05 22:06:43",
    "id": 4
    }
}
```

## Read Brand

You can retrieve a single brand by an existig id or list all your brands.

To retrieve a single brand, send a GET request to `{{ $site.themeConfig.currentVersion }}brand/$BRAND_ID`.

### Response Body
```json
{
  "item": {
    "id": 4,
    "name": "Foo Brand",
    "caption": "A Brand of Bar",
    "slug": "foo-brand",
    "updated_at": "2018-08-05 22:06:43",
    "created_at": "2018-08-05 22:06:43"
    },
    "success": true
}
```

To retrieve a list of all brands, send a GET request to `{{ $site.themeConfig.currentVersion }}brand`. 

### Response Body
```json
{
  "items": [
    {
      "id": 1,
      "name": "Default Brand",
      "caption": null,
      "slug": "default-brand",
      "created_at": "2018-08-04 20:34:24",
      "updated_at": "2018-08-04 20:34:24"
    },
    {
      "id": 3,
      "name": "Foo Brand",
      "caption": "A Brand of Bar",
      "slug": "foo-brand",
      "created_at": "2018-08-09 18:17:50",
      "updated_at": "2018-08-09 18:17:50"
    }
  ],
  "count": 6
}
```


## Update Brand

To update a brand, send a PUT request to `{{ $site.themeConfig.currentVersion }}brand/$BRAND_ID`.
The request should contain a full representation of the Brand including existing attributes. Note that any attributes that are not provided will be reset to their default values.
If you just want to update a single field, you also can send it via PATCH.

## Delete Brand