# Randomix

## Configuration 

```javascript
import * as generators from '@1024pix/randomix/generators';
import * as data from '@1024pix/randomix/data';
import { Randomix } from '@1024pix/randomix';

export const randomix = new Randomix({
  generators,
  data,
});
```

## Usage

```javascript
import { randomix } from './randomix'; 

const generator = randomix.getGenerator({ locale: 'fr', seed: 42 });

const integer = generator.integer(10);
const person = generator.person();
```
