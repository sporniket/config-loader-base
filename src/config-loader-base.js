/* SPDX-License-Identifier: GPL-3.0-or-later */
/****************************************

---
Copyright (C) 2025 David SPORN
---
This is part of **config-loader-base-by-sporniket**.
A simple method template to load a set of configuration values identified by a named key.
****************************************/

export function loadConfigurationMap(keys = [], keyLoader, keyMapper = (k) => k) {
    const keyValueStructMapper = (k) => new Map([
        ['key', keyMapper(k)],
        ['value', keyLoader(keyMapper(k))]
    ]);
    return new Map(
        keys.map(k => [k, keyValueStructMapper(k)])
    );
}

export function createKeyPrefixer(prefix, separator = '.') {
    return (k) => `${prefix}${separator}${k}`;
}
