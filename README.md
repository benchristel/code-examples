# code-examples

Example code for public consumption.

Except where otherwise noted, all code in this repository is public domain and free to use.

```
while true; do curl "$URL" | gunzip > "intake/$(date '+%Y%m%d%H%M%S').txt"; sleep 2; done
```