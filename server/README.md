# Server

`npm install`
`npm run dev`

API Endpoints
## GET /recipes
Fetches a list of recipes. You can filter recipes based on the following query parameters:

ingredient (optional): Filter recipes containing a specific ingredient.

country (optional): Filter recipes by country.

category (optional): Filter recipes by category.

### Response:

Success (200): Returns an array of RecipeShort objects.

Failure (404): If no recipes are found, returns a message indicating so.

Failure (500): If an error occurs during the fetch, returns a message indicating the failure.

## GET /recipes/:id
Fetches the details of a single recipe by its ID.

Parameters:

id: The ID of the recipe you want to fetch.

Response:

Success (200): Returns a Recipe object with the full details of the recipe.

Failure (400): If the id parameter is not provided, returns an error message.

Failure (404): If the recipe is not found, returns a message indicating the failure.

Failure (500): If an error occurs during the fetch, returns a message indicating the failure.