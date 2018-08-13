/**
 * Common image helper functions.
 */

class imgHelper {

    static createFigureElement(className, restaurant) {

    const figure = document.createElement('figure');
    const picture = document.createElement('picture');
    const sourceMedium = document.createElement('source');
    const sourceLarge = document.createElement('source');
    const image = document.createElement('img');
    let restauarntImgUrl = DBHelper.imageUrlForRestaurant(restaurant);

    sourceMedium.media = '(min-width: 600px)'
    sourceMedium.srcset = restauarntImgUrl.replace('.jpg', '-medium_x1.jpg');

    sourceLarge.media = '(min-width: 800px)'
    sourceLarge.srcset = restauarntImgUrl.replace('.jpg', '-large_x2.jpg');

    image.className = className;
    image.src = restauarntImgUrl.replace('.jpg', '-small.jpg');
    image.tabIndex = 0;
    image.alt = DBHelper.imageAltTag(restaurant);
    picture.append(sourceMedium);
    picture.append(sourceLarge);
    picture.append(image);

    figure.append(picture);
    
    return figure;
    }

}