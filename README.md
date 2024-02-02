# Randomix

## Configuration 

```javascript
import * as data from '@1024pix/randomix/data';
import { Randomix } from '@1024pix/randomix';

Randomix.setData(data);
```

## Usage

```javascript
import { Randomix } from '@1024pix/randomix'; 

const randomix = new Randomix({ seed: 42 });

const integer = randomix.getInteger(10);
const person = randomix.getPerson();
```