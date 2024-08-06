# Terraform Cheatsheet

## Context and Configuration

```
kubectl config get-contexts
kubectl config use-context <context_name>
```

## Pods

```
kubectl get pods
kubectl describe pod <pod_name>
kubectl delete pod <pod_name>
kubectl logs <pod_name>
kubectl logs -f <pod_name>
kubectl exec -it <pod_name> -- /bin/bash
```

## Services

```
kubectl get svc
kubectl describe svc <service_name>
kubectl delete svc <service_name>
```

## Deployments

```
kubectl get deployments
kubectl describe deployment <deployment_name>
kubectl delete deployment <deployment_name>
```

## Creating Resources

```
kubectl apply -f <file.yaml>
kubectl create -f <file.yaml>
```

## Logs

```
kubectl logs <pod_name>
kubectl logs -f <pod_name>
```

## Exec into Pod

```
kubectl exec -it <pod_name> -- /bin/bash
```

## Port Forwarding

```
kubectl port-forward <pod_name> <local_port>:<remote_port>
```

## Scaling

```
kubectl scale deployment <deployment_name> --replicas=<number_of_replicas>
```

## Rolling Updates

```
kubectl rollout status deployment/<deployment_name>
kubectl rollout history deployment/<deployment_name>
kubectl rollout undo deployment/<deployment_name>
```

## ConfigMaps and Secrets

```
kubectl create configmap <name> --from-literal=<key>=<value>
kubectl get configmaps
kubectl describe configmap <name>
kubectl delete configmap <name>

kubectl create secret generic <name> --from-literal=<key>=<value>
kubectl get secrets
kubectl describe secret <name>
kubectl delete secret <name>
```

## Namespace Management

```
kubectl get namespaces
kubectl create namespace <name>
kubectl delete namespace <name>
kubectl config set-context --current --namespace=<name>
```

## Advanced Commands

# Get All Resources in a Namespace

`kubectl get all -n <namespace>`

# Describe Node

`kubectl describe node <node_name>`

# Taint a Node

`kubectl taint nodes <node_name> key=value:taint-effect`

# Label a Node

`kubectl label nodes <node_name> key=value`

# Get Events

`kubectl get events --sort-by=.metadata.creationTimestamp`

# View the Current Context

`kubectl config current-context`

# Switch Context

`kubectl config use-context <context_name>`

# Apply Multiple Files

`kubectl apply -f <directory>/`

# Rolling Restart of a Deployment

`kubectl rollout restart deployment/<deployment_name>`

# Patch a Resource

`kubectl patch <resource_type> <resource_name> -p '{"spec": {"template": {"spec": {"containers": [{"name": "<container_name>", "image": "<new_image>"}]}}}}'`

# Port Forward to a Service

`kubectl port-forward svc/<service_name> <local_port>:<remote_port>`

# Get Resource Usage

```
kubectl top nodes
kubectl top pods
```

# Debug a Pod with Ephemeral Containers

`kubectl debug pod/<pod_name> -c <container_name> --image=<debug_image>`

# Create a Job from a CronJob

`kubectl create job --from=cronjob/<cronjob_name> <job_name>`

# Get API Resources

`kubectl api-resources`

# Get API Versions

`kubectl api-versions`
