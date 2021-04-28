# Secret Injector

Injects GitHub Actions Secrets & env values referenced in all project files.

## Example usage

1. Create a file in the repository which references GitHub actions secret. For example, `manifests/service.yml`:

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

```
uses: inrixia/secret-injector@v1
```

3. During workflow execution, all project files will be parsed and the reference to a GitHub secret or env value will be injected.