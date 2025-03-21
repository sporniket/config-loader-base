# Config loader base

> [WARNING] Please read carefully this note before using this project. It contains important facts.

Content

1. What is **Config loader base**, and when to use it ?
2. What should you know before using **Config loader base** ?
3. How to use **Config loader base** ?
4. Known issues
5. Miscellanous

## 1. What is **Config loader base**, and when to use it ?
**Config loader base** is a NPM library providing a simple method template to load a set of configuration values identified by a named key.

One would provide to the template method :

* A lambda that would convert a property name into a key name, to be used to load the property value ;
* A lambda that use the property key to load the property value.

### What's new in v0.0.4

* Proofread README.

### What's new in v0.0.3

* Add a README ;
* Fine tune the packaging process of `npm pack`.

### What's new in v0.0.2

* Fixes the `requires` export preventing CommonJS code to load the module.

### What's new in v0.0.1

* Initial release, working and fully covered code.

### Licence
 **Config loader base** is free software: you can redistribute it and/or modify it under the terms of the
 GNU Lesser General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your
 option) any later version.

 **Config loader base** is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for
 more details.

 You should have received a copy of the GNU Lesser General Public License along with **Config loader base**.
 If not, see http://www.gnu.org/licenses/ .


## 2. What should you know before using **Config loader base** ?

> Do not use **Config loader base** if this project is not suitable for your project

## 3. How to use **Config loader base** ?

### npm

```
npm install config-loader-base
```

### Directions and sample code

You may read the test suite to see how it can be used.

## 4. Known issues

See the [project issues](https://github.com/sporniket/config-loader-base/issues) page.

## 5. Miscellanous

### Report issues

Use the [project issues](https://github.com/sporniket/config-loader-base/issues) page.
