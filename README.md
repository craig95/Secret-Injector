[![Tests](https://github.com/Inrixia/Secret-Injector/actions/workflows/testAction.yml/badge.svg)](https://github.com/Inrixia/Secret-Injector/actions/workflows/testAction.yml)
# Secret Injector

Injects GitHub Actions Secrets & env values referenced in all project files.

## Example usage

1. Create a file in the repository which references a GitHub actions secret or env value. For example, `manifests/service.yml`:

```yml
apiVersion: v1
kind: Service
metadata:
  name: ${{ secrets.NAME }}
spec:
  type: LoadBalancer
  ports:
  - port: ${{ env.PORT }}
  selector:
    app: ${{ secrets.NAME }}
```


2. Add the following to your workflow configuration file

```yml
uses: inrixia/secret-injector@v1
with:
  secrets: ${{ toJson(secrets) }}
  env: ${{ toJson(env) }}
```

3. During workflow execution, all project files will have GitHub secret or env values injected.