# Roadmap

## Create a first component

The first thing you need to do is to create a new component. You can create it manually or with the following command, replacing newComponent by the name of you component:
```sh
ng generate component newComponent
```
If you create it manually, create the files :
* newComponent.component.ts
* newComponent.component.html
* newComponent.component.css

And do not forget to update the app.module.ts file :

```javascript
import { NewComponentComponent } from './new-component/new-component.component';

...

@NgModule({
  declarations: [
    ...
    NewComponentComponent
  ],
  imports: [
    ...
  ],
  providers: [
    ...
  ],
  bootstrap: ...
})

```

After that you need to call you component in you app. You can do so by adding the following line to you code :
```html
<newComponent></newComponent>
```
## Make it look good

In the beginning, you should try and display false data hard coded in your component. You should display it like you want the final result to be.

For the project I used NG-ZORRO a lot, you can find more about it here : https://ng.ant.design/docs/introduce/en

## Create a first service

You can create a service using the command :
```sh
ng generate service newService
```
The services are used to contact the api to get data and pass it to the component wich will display it.

Add this service in your component by adding it to the constructor of you component. Then you have to move the hard coded data in your component to your service. You will have to make you component call for the data in your service.

## The complete chain

To finish the chain to the real api, you will have to use utils/http-caller.ts only the get function is implemented, if you want to do more, you will have to make it.

But if you only want to get data, not to push it, it will work like a charm. You now have to make your service get the data from the api with http-caller.ts instead of using hard coded data.

Do not forget to change the url called by the http-caller. You can add the url to your api in environments/environment.ts and call it instead of the pokemon url in http-caller.

## Going further

Add routing to your project !
